import multer from "multer";
import path from "path";

// storage config
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    const extn = path.extname(file.originalname).toLowerCase();
    if (extn === ".pdf") {
      cb(null, path.resolve("public", "uploads"));
    } else if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extn)) {
      cb(null, path.resolve("public", "images"));
    } else {
      cb(new Error("Unsupported file type"), null);
    }
  },
  filename: (req, file, cb) => {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

// file type filter
const fileFilter = (req, file, cb) => {
  const extn = path.extname(file.originalname).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".gif", ".webp", ".pdf"].includes(extn)) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"), false);
  }
};

// export configured upload middleware
export const uploadFile = multer({
  storage: storageConfig,
  fileFilter
});
