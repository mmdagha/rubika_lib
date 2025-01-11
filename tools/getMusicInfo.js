import { parseFile } from "music-metadata";
import fs from "fs/promises";

const getMusicInfo = async (musicUri, extractCover) => {
        await fs.access(musicUri);
        const metadata = await parseFile(musicUri);
        const { title, artist, album } = metadata.common;
        let picture = null;

        if (!!extractCover && metadata.common.picture && metadata.common.picture.length > 0) {
            const cover = metadata.common.picture[0];
            picture =cover.data.toString("base64")
        }
        return {
            title: title || "Unknown Title",
            artist: artist || "Unknown Artist",
            album: album || "Unknown Album",
            picture,
        };
};

export default getMusicInfo;
