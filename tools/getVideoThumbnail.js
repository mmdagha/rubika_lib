import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';

const getVideoThumbnail = async (videoUri, videoDuration) => {

    const timestamp = Date.now(); 
    const thumbnailPath = path.join(__dirname, `thumbnail_${timestamp}.jpg`); 

    return new Promise((resolve, reject) => {
        ffmpeg(videoUri)
            .on('end', () => {
                resolve(thumbnailPath);
            })
            .screenshots({
                timestamps: [videoDuration / 2], 
                filename: `thumbnail_${timestamp}.jpg`, 
                folder: path.dirname(thumbnailPath)
            });
    });
};

export default getVideoThumbnail;

