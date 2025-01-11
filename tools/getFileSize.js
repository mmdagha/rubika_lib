import getFileBuffer from "./getFileBuffer.js";
const getFileSize = async fileUri => {
    return getFileBuffer(fileUri).length;
};
export default getFileSize;
