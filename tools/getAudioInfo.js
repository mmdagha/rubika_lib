import ffmpeg from 'fluent-ffmpeg';
import fs from "fs";

const getAudioInfo = async (audioUri) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(audioUri)) {reject({duration: 1})}

        ffmpeg.ffprobe(audioUri, (err, metadata) => {
            if (err) {reject({duration: 1})}
            const { duration } = metadata.format;

            resolve({
                duration,
                asset: metadata.format
            });
        });
    });
};

export default getAudioInfo;
