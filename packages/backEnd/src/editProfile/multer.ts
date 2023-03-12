import express from "express";
import multer from "multer";
export const upload = multer({
  storage: multer.diskStorage({
    filename: (_req: express.Request, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
  }),
});
