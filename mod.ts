import { loadPNG } from "./load.ts";
import * as chunks from './chunks/index.ts';

export async function readDimensions(filePath: string) {
  const reader = await loadPNG(filePath);
  const ihdr = chunks.readIHDR(reader);

  return {
    width: ihdr.width,
    height: ihdr.height
  };
}
