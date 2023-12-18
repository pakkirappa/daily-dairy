import multer from "multer";
import path from "path";
import { v4 as uuid } from "uuid";
import { FOLDER_NAMES } from "../constants";

const resourcesPath = path.join(
  process.cwd(),
  FOLDER_NAMES.PUBLIC,
  FOLDER_NAMES.UPLOADS
);

const resourceStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, resourcesPath);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      uuid() +
        file.originalname
          .slice(file.originalname.lastIndexOf("."))
          .toLowerCase()
    );
  },
});

export const resources = multer({ storage: resourceStorage });
