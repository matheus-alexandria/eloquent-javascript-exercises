import { readFile } from "fs/promises";
import { resolve } from "path";

const args = process.argv;
const expression = args[2];
const file = args[3];

const path = resolve(file);

searchFile(
  path,
  expression
);

async function searchFile(path: string, expression: string): Promise<void> {
  const regex = new RegExp(`${expression}`, 'g');
  const file = await readFile(path, 'utf-8');
  let shouldContinueSearch = true;
  do {
    const oldSearchIndex = regex.lastIndex;
    const found = regex.exec(file);
    if (oldSearchIndex >= regex.lastIndex) shouldContinueSearch = false;
    
    if (found?.length) {
      const endOfLine = found.input.indexOf('\n', found.index);
      const lineData = findLastBreakLine(found.input, found.index);
      console.log(`${lineData.line}.${found.input.slice(lineData.startIndex, endOfLine)}`);
    }
  } while (shouldContinueSearch);
}

function findLastBreakLine(input: string, endIndex: number): { startIndex: number, line: number } {
  let oldIndex = 0;
  let fileLine = 1;
  let breakLineIndex = input.indexOf('\n');

  while (breakLineIndex < endIndex) {
    oldIndex = breakLineIndex;
    breakLineIndex = input.indexOf('\n', breakLineIndex + 2);
    fileLine++;
  }

  return {
    startIndex: oldIndex + 2,
    line: fileLine
  };
}