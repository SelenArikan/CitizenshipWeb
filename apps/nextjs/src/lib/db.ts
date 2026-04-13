import Database from "better-sqlite3";
import fs from "fs";
import os from "os";
import path from "path";

const SOURCE_DB_CANDIDATES = [
  path.resolve(process.cwd(), "../../shared/db/chat.sqlite"),
  path.resolve(process.cwd(), "../shared/db/chat.sqlite"),
  path.resolve(process.cwd(), "shared/db/chat.sqlite"),
];

const FALLBACK_LOCAL_DB_PATH = SOURCE_DB_CANDIDATES[0];
const TEMP_DB_PATH = path.join(os.tmpdir(), "citizenshipweb", "chat.sqlite");

type DbRuntimeInfo = {
  path: string;
  isEphemeral: boolean;
  sourcePath: string | null;
};

function openDatabase(dbPath: string) {
  return new Database(dbPath, { fileMustExist: false });
}

let cachedDb: ReturnType<typeof openDatabase> | null = null;
let cachedInfo: DbRuntimeInfo | null = null;

function ensureParentDir(filePath: string) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function findSourceDbPath() {
  return SOURCE_DB_CANDIDATES.find((candidate) => fs.existsSync(candidate)) ?? null;
}

function resolveDbRuntimeInfo(): DbRuntimeInfo {
  if (cachedInfo) return cachedInfo;

  const configuredPath = process.env.SQLITE_DB_PATH?.trim();
  if (configuredPath) {
    ensureParentDir(configuredPath);
    cachedInfo = {
      path: configuredPath,
      isEphemeral: false,
      sourcePath: null,
    };
    return cachedInfo;
  }

  const sourcePath = findSourceDbPath();

  if (process.env.VERCEL === "1") {
    ensureParentDir(TEMP_DB_PATH);

    if (!fs.existsSync(TEMP_DB_PATH) && sourcePath) {
      fs.copyFileSync(sourcePath, TEMP_DB_PATH);
    }

    cachedInfo = {
      path: TEMP_DB_PATH,
      isEphemeral: true,
      sourcePath,
    };
    return cachedInfo;
  }

  if (sourcePath) {
    cachedInfo = {
      path: sourcePath,
      isEphemeral: false,
      sourcePath,
    };
    return cachedInfo;
  }

  ensureParentDir(FALLBACK_LOCAL_DB_PATH);
  cachedInfo = {
    path: FALLBACK_LOCAL_DB_PATH,
    isEphemeral: false,
    sourcePath: null,
  };
  return cachedInfo;
}

export function getDbRuntimeInfo() {
  return resolveDbRuntimeInfo();
}

export function getDb() {
  const runtimeInfo = resolveDbRuntimeInfo();
  if (cachedDb) return cachedDb;

  cachedDb = openDatabase(runtimeInfo.path);
  return cachedDb;
}
