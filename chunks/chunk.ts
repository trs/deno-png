import { BinaryReader } from 'https://deno.land/x/binary_reader@v0.1.4/mod.ts';

export function readChunk(reader: BinaryReader) {
  const length = reader.readUint32();
  const type = reader.readString(4);
  const data = new BinaryReader(reader.readBytes(length));
  const crc = reader.readBytes(4);

  // TODO: validate crc?

  return {
    length,
    type,
    data,
    crc
  };
}
