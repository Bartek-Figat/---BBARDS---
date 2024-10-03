import {
  Controller,
  Route,
  Body,
  SuccessResponse,
  Post,
  Get,
  Security,
  Request,
} from "tsoa";
import { Subscription } from "./stripe.service";

@Route("api/v1")
export class SubscriptionController extends Controller {
  @Security("jwt")
  @SuccessResponse(200)
  @Get("subscription/conf")
  async conf() {
    return await new Subscription().conf();
  }

  @Security("jwt")
  @Post("subscription/create-checkout-session")
  public async createSubscriptionSession(@Body() requestBody: any) {
    return await new Subscription().createSubscriptionSession(requestBody);
  }

  @Security("jwt")
  @Post("subscription/retrieve-checkout-session")
  public async retrieveSubscriptionSession(
    @Body() requestBody: any,
    @Request() req: any
  ) {
    return await new Subscription().retrieveSubscriptionSession(
      requestBody,
      req.user
    );
  }
}
