import { BinaryReader } from 'https://deno.land/x/binary_reader@v0.1.4/mod.ts';

const SIG = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);

export function validSignature(reader: BinaryReader) {
  const signature = reader.readBytes(8);

  if (signature.length !== SIG.length) return false;

  for (let i = 0; i < SIG.length; i++) {
    if (signature[i] !== SIG[i]) return false;
  }
  return true;
}
