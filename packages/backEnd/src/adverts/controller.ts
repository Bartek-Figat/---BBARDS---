import { Handler } from "express";
import { advertsService } from "./adverts.service";
import { MulterRequest } from "../interface";
import { ICategories } from "../dto/dto";

export const getAdverts: Handler = async (req, res, next) => {
  const response = await advertsService.filterCategories(
    req.query as unknown as ICategories
  );
  res.status(response.statusCode).json(response);
};

export const postAdvert: Handler = async (req: MulterRequest, res, next) => {
  const response = await advertsService.addAdvertising(
    req.files,
    req.user,
    req.body
  );
  res.status(response.statusCode).json(response);
};

export const getAdvertsData: Handler = async (req, res, next) => {
  const response = await advertsService.getAdvertisingData();
  res.status(response.statusCode).json(response);
};
