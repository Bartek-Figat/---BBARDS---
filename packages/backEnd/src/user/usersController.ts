import { Controller, Get, Route, Security, Request } from "tsoa";
import { UsersService } from "./usersService";

@Route("api/v1")
export class UsersController extends Controller {
  /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from db and receive corresponding user details.
   */
  @Security("jwt")
  @Get("user")
  public async getUser(@Request() req: any) {
    console.log(new UsersService().getUser(req.user));
    return new UsersService().getUser(req.user);
  }
}
