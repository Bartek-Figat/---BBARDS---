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

    const check = (object: IAdds) => {
      for (let key in {
        productCategory,
        price,
        priceCondition,
        adCategory,
        productCondition,
        city,
      }) {
        if (object[key] !== undefined) return req.query;
      }
    };
    const resultFromCheckQuey = check(req.query);

    try {
      const parsePage: number = parseInt(page || "0");
      const pageSize: number = 10;

      if (resultFromCheckQuey === undefined) {
        const paginationProps: { parsePage: number; pageSize: number } = {
          parsePage,
          pageSize,
        };
        const data = await this.repository.filterOnlyWithPagination(
          paginationProps
        );
        res.status(StatusCode.NOT_FOUND).json({
          dataLength: data.length,
          msg: StatusCode.NOT_FOUND,
          data,
        });
      } else {
        const props: any = {
          parsePage,
          pageSize,
          resultFromCheckQuey,
        };
        const filter = await this.repository.advancedFiltration(props);

        res.status(StatusCode.SUCCESS).json({
          filterLength: filter.length,
          filter,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
