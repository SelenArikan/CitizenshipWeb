import { access, copyFile, mkdir, readdir, rm } from "fs/promises";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
/** `apps/nextjs` kökü (cwd’den bağımsız) */
const nextjsRoot = resolve(__dirname, "..");
const sourceDir = resolve(nextjsRoot, "../../shared/i18n");
const targetDir = join(nextjsRoot, "src/generated/i18n");

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
  const targetParent = dirname(targetDir);

  if (!sourceExists) {
    if (await exists(targetDir)) {
      console.log(`Shared i18n not found at ${sourceDir}; keeping existing ${targetDir}.`);
      return;
    }
    throw new Error(`No shared i18n at ${sourceDir} and no ${targetDir} to fall back.`);
  }

  await rm(targetDir, { recursive: true, force: true });
  await mkdir(targetParent, { recursive: true });
  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) {
      continue;
    }

    await copyFile(join(sourceDir, entry.name), join(targetDir, entry.name));
  }

  console.log(`Synced ${sourceDir} → ${targetDir}`);
}

syncSharedI18n().catch((error) => {
  console.error("Failed to sync shared i18n files:", error);
  process.exit(1);
});
