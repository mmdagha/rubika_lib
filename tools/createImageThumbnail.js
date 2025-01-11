import sharp from 'sharp';
const createImageThumbnail = async (imageUri) => {
    const resizedImageBuffer = await sharp(imageUri)
      .resize(45, 45)
      .toBuffer();
    
    const base64Image = resizedImageBuffer.toString('base64');
    return base64Image; }


export default createImageThumbnail;
