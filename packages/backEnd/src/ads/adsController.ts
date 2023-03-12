import {Controller, Get, Middlewares, Path, Post, Request, Route} from "tsoa";
import {AdsService} from "./ads.service";
import {upload} from "../multer";
import express from "express";

@Route("ads")
export class AdsController extends Controller {

    @Get("{adId}")
    public async getAd(@Path() adId: any) {
        return await new AdsService().getAd(adId);
    };

    @Get()
    public async getFilteredAds(@Request() request: any) {
        return await new AdsService().filterCategories(request.query);
    };

    @Middlewares([upload.array('files')])
    @Post("add")
    public async putAd(@Request() request: any) {
        return await new AdsService().addAd(
            this.getFileFromRequest(request),
            request.token,
            request.body,
        );
    };

    private getFileFromRequest(
        req: express.Request
    ): Express.Multer.File[] {
        if (!req.files || (typeof req.files === 'object' && !Array.isArray(req.files))) {
            return [];
        }
        return req.files;
    }
}