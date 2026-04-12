import { access, mkdir, readdir, rm, copyFile } from "fs/promises";
import path from "path";

const projectRoot = process.cwd();
const sourceDir = path.resolve(projectRoot, "../../shared/i18n");
const targetDir = path.resolve(projectRoot, "src/generated/i18n");

async function exists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function syncSharedI18n() {
  const sourceExists = await exists(sourceDir);
  const targetExists = await exists(targetDir);

  if (!sourceExists) {
    if (targetExists) {
      console.log(`Shared i18n directory not found at ${sourceDir}; using committed generated files.`);
      return;
    }

    throw new Error(`Neither shared i18n (${sourceDir}) nor generated i18n (${targetDir}) exists.`);
  }

  await rm(targetDir, { recursive: true, force: true });
  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) {
      continue;
    }

    await copyFile(path.join(sourceDir, entry.name), path.join(targetDir, entry.name));
  }

  console.log(`Synced shared i18n files to ${targetDir}`);
}

syncSharedI18n().catch((error) => {
  console.error("Failed to sync shared i18n files:", error);
  process.exit(1);
});
