import imageDownloader from "image-downloader";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";
import verifyToken from "../utils/verifyToken.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function uploadPhotoByLink(link, token) {
  const user = verifyToken(token);
  const photoPath = join(__dirname, "/../uploads/", user.id);
  const dirExists = fs.existsSync(photoPath);
  if (!dirExists) {
    fs.mkdirSync(photoPath);
  }
  const name = Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: photoPath + "/" + name,
  });
  return name;
}

export function uploadPhoto(files, token) {
  const uploadedFiles = [];
  const user = verifyToken(token);
  const photoPath = join(__dirname, "/../uploads/", user.id);
  const dirExists = fs.existsSync(photoPath);
  if (!dirExists) {
    fs.mkdirSync(photoPath);
  }
  for (let i = 0; i < files.length; i++) {
    const { originalname, path, filename } = files[i];
    const nameArr = originalname.split(".");
    const ext = nameArr[nameArr.length - 1];
    const newPath = photoPath + "." + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(filename + "." + ext);
  }
  return uploadedFiles;
}
