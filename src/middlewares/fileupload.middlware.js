import multer from "multer";

// creating multer and configuring this to enable uploading image
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    const extn = Path.extname(file.originalname).toLowerCase();
    if (extn === ".pdf") {
      cb(null, Path.resolve("src", "public", "uploads"));
    } else if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extn)) {
      cb(null, Path.resolve("src", "public", "images"));
    } else {
      cb(new Error("Unsupported file type"), null);
    }
  },
  filename: (req, file, cb) => {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

export const uploadFile = multer({
  storage: storageConfig,
});
