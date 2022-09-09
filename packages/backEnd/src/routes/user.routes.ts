import { Router, Request, Response, NextFunction } from "express";
const router = Router({
  caseSensitive: true,
  strict: true,
});

router.get("/user", (req: Request, res: Response, next: NextFunction) => {
  res.json({ url: req.originalUrl, time: Date.now() });
});

export default router;
