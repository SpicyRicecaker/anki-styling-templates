import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';

const directory = path.resolve('..', 'main', 'src');
const outDir = path.resolve(path.resolve(), 'build');

(async () => {
  const files = await fs.readdir(directory, { withFileTypes: true });
  try {
    const directories: string = files
      .filter((file) => file.isDirectory())
      .map((file) => file.name)
      .reduce(
        (full, name) => `${full} ${path.resolve(directory, name)}:${outDir}`,
        ''
      );
    const rawOptions = ['--no-source-map'];
    const options = rawOptions.reduce((prev, curr) => `${prev} ${curr}`, '');
    // console.log(`sass ${directories} --no-source-map`);
    exec(`sass ${directories} ${rawOptions}`);
  } catch (e) {
    console.log(e);
  }
})();
