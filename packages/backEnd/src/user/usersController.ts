import { Controller, Get, Route, Security, Request } from "tsoa";
import { UsersService } from "./usersService";

@Route("api/v1")
export class UsersController extends Controller {
  @Security("jwt")
  @Get("user")
  public async getUser(@Request() req: any) {
    return new UsersService().getUser(req.user);
  }
}
