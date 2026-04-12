import Database from 'better-sqlite3';
import path from 'path';

// ensure absolute path works regardless of working directory
const dbPath = path.resolve(process.cwd(), '../../shared/db/chat.sqlite');

export function getDb() {
    return new Database(dbPath, { fileMustExist: true });
}
