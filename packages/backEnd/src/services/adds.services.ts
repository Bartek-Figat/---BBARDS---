import { Request, Response, NextFunction, RequestHandler } from "express";
import { db } from "../db/db";
import { Index } from "../enum";
import { Repository } from "../repositories/add.respositories";
import { StatusCode } from "../enum";
import { IAdds, IPagination } from "../interface/index";

export class AddService {
  constructor(private repository: Repository = new Repository()) {}

  async AdvertisingData(req: Request, res: Response, next: NextFunction) {
    try {
      const adds = await this.repository.find({});
      const total = await db.collection(Index.Add).countDocuments({});

      return res.status(StatusCode.SUCCESS).json({ total, adds });
    } catch (err) {
      console.log(err);
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async filterAdvertising(
    req: Request<{}, {}, {}, IAdds>,
    res: Response,
    next: NextFunction
  ) {
    const {
      page,
      productCategory,
      price,
      priceCondition,
      adCategory,
      productCondition,
      city,
    }: IAdds = req.query;
    try {
      const parsePage: number = parseInt(page || "0");
      const pageSize: number = 10;

      const props: IPagination = {
        parsePage,
        pageSize,
        productCategory,
        price,
        priceCondition,
        adCategory,
        productCondition,
        city,
      };
      const filter = await this.repository.filter(props);
      const total = await db.collection(Index.Add).countDocuments({});

      return res.status(StatusCode.SUCCESS).json({
        totalPages: Math.ceil(total / pageSize),
        filterLength: filter.length,
        filter,
      });
    } catch (err) {
      console.log(err);
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
