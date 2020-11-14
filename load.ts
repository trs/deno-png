import { BinaryReader } from 'https://deno.land/x/binary_reader@v0.1.4/mod.ts';

import { validSignature } from "./signature.ts";

export async function loadPNG(filePath: string) {
  const buffer = await Deno.readFile(filePath);
  const reader = new BinaryReader(buffer);

  if (!validSignature(reader)) {
    throw new Error('Not a valid PNG');
  }

  return reader;
}
