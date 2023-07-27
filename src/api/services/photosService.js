import imageDownloader from "image-downloader";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const photoPath = join(__dirname, "/../uploads/");

export async function uploadPhotoByLink(link) {
  const name = Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: photoPath + name,
  });
  return name;
}

export function uploadPhoto(files) {
  const uploadedFiles = [];
  for (let i = 0; i < files.length; i++) {
    const { originalname, path, filename } = files[i];
    const nameArr = originalname.split(".");
    const ext = nameArr[nameArr.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(filename + "." + ext);
  }
  return uploadedFiles;
}
