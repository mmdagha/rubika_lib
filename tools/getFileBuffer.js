import { Buffer } from "buffer";
import fs from 'fs';

const getFileBuffer = async fileUri => {
    const content = await fs.promises.readFile(fileUri, { encoding: 'base64' });
    let buffer = new Uint8Array(Buffer.from(content, 'base64'));
    return buffer;
};

export default getFileBuffer;
