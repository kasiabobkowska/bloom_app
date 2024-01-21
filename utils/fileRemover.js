import fs from "fs";
import path from "path";

const fileRemover = (filename) => {
    const currentModulePath = new URL(import.meta.url).pathname;
    const currentDirname = path.dirname(currentModulePath);

    fs.unlink(path.join(currentDirname, "../uploads", filename), function (err) {
        if (err && err.code == "ENOENT") {
            // file doesn't exist
            console.log(`File ${filename} doesn't exist.`);
        } else if (err) {
            console.log(`Error occurred while removing file ${filename}`);
        } else {
            console.log(`Removed ${filename}`);
        }
    });
};

export { fileRemover };
