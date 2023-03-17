import {Controller, Get, Middlewares, Path, Post, Request, Route} from "tsoa";
import {AdsService} from "./ads.service";
import {upload} from "../multer";

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
            this.getImagesFiles(request.files),
            request.token,
            request.body,
        );
    };

    private getImagesFiles(
        files: Express.Multer.File[]
    ): Express.Multer.File[] {
        return files.filter(file => file.mimetype === "image/jpeg" || file.mimetype === "image/png")
    }
}