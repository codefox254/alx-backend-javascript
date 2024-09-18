import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export const readDatabase = async (filePath) => {
  try {
    const data = await readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const result = {};

    lines.slice(1).forEach(line => {
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(firstname);
      }
    });

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
