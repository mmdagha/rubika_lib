import fs from "fs/promises";
import sharp from "sharp";

const getImageDimensions = async (imageUri) => {
        await fs.access(imageUri);
        const metadata = await sharp(imageUri).metadata();
        const { height, width } = metadata;
        const stats = await fs.stat(imageUri);
        const size = stats.size;
        return {
            height,
            width,
            size, 
        };
};

export default getImageDimensions;
