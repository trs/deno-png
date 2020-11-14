import { BinaryReader } from 'https://deno.land/x/binary_reader@v0.1.4/mod.ts';

import { readChunk } from "./chunk.ts";

export function readIHDR(reader: BinaryReader) {
  const chunk = readChunk(reader);
  if (chunk.type !== 'IHDR') {
    throw new Error(`Expected IHDR, got ${chunk.type}`);
  }

  const width = chunk.data.readUint32();
  const height = chunk.data.readUint32();

  return {
    width,
    height
  };
}
