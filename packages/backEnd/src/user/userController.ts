import {
  Controller,
  Route,
  Get,
  Request,
  Security,
  SuccessResponse,
} from "tsoa";
import { UsersService } from "./usersService";
import { AuthService } from "../auth/authService";
import { User } from "./dto/user";

@Route("profile")
export class UserController extends Controller {
  @Security("jwt")
  @Get("user")
  public async getUser(@Request() req: any): Promise<User | null> {
    return new UsersService().getUser(req.user);
  }

  @Security("jwt")
  @SuccessResponse(200)
  @Get("logout")
  async userLogout(@Request() req: any): Promise<void> {
    await new AuthService().userLogout(req.user);
  }
}
