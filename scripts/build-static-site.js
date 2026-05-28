import { access, mkdir, readdir, rename, rmdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const apiDir = path.join(rootDir, "src", "pages", "api");
const tempApiDir = path.join(rootDir, ".astro-static-api-backup");
const astroBin = path.join(rootDir, "node_modules", "astro", "bin", "astro.mjs");

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function runAstroBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [astroBin, "build", ...process.argv.slice(2)], {
      cwd: rootDir,
      stdio: "inherit",
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Astro build failed with exit code ${code}`));
    });

    child.on("error", reject);
  });
}

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function moveApiFiles(sourceDir, destinationDir) {
  const files = await collectFiles(sourceDir);

  await mkdir(destinationDir, { recursive: true });

  for (const filePath of files) {
    const relativePath = path.relative(sourceDir, filePath);
    const destinationPath = path.join(destinationDir, relativePath);

    await mkdir(path.dirname(destinationPath), { recursive: true });
    await rename(filePath, destinationPath);
  }
}

async function removeEmptyDirs(dir) {
  if (!(await pathExists(dir))) return;

  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      await removeEmptyDirs(path.join(dir, entry.name));
    }
  }

  const remaining = await readdir(dir);
  if (remaining.length === 0) {
    await rmdir(dir);
  }
}

let apiMoved = false;

try {
  if (await pathExists(apiDir)) {
    if (await pathExists(tempApiDir)) {
      throw new Error(`Temporary API path already exists: ${tempApiDir}`);
    }

    await moveApiFiles(apiDir, tempApiDir);
    await removeEmptyDirs(apiDir);
    apiMoved = true;
  }

  await runAstroBuild();
} finally {
  if (apiMoved && (await pathExists(tempApiDir))) {
    await moveApiFiles(tempApiDir, apiDir);
    await removeEmptyDirs(tempApiDir);
  }
}
