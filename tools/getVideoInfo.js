import ffmpeg from "fluent-ffmpeg";
import fs from "fs";

const getVideoInfo = async (videoUri) => {
    if (!fs.existsSync(videoUri)) {
        return {
            width: 250,
            height: 300,
            duration: 1
        };
    }

    const metadata = await new Promise((resolve, reject) => {
        ffmpeg.ffprobe(videoUri, (err, metadata) => {
            resolve(metadata);
        });
    });

    const { width, height, duration } = metadata.streams[0];
    return {
        width,
        height,
        duration,
        asset: metadata.streams[0]
    };
};

export default getVideoInfo;
