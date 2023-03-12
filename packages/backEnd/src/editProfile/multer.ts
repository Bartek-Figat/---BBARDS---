import express from "express";
import multer from "multer";
export const upload = multer({
  storage: multer.diskStorage({
    filename: (_req: express.Request, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
  }),
  limits: {
    fields: 1,
  },
  fileFilter(_req: express.Request, file, callback) {
    if (file.mimetype.includes("image/jpeg" || "image/png")) {
      callback(null, true);
    } else {
      callback(new Error("File not allowed"));
    }
  },
});
