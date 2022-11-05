import {
  Controller,
  Post,
  Route,
  Body,
  Path,
  Get,
  Delete,
  Security,
  Request,
} from "tsoa";
import { RegisterDto, LoginDto } from "./auth.dto";
import { AuthService } from "./authServer";

@Route("api/v1")
export class AuthController extends Controller {
  @Post("registration")
  public async userRegister(@Body() requestBody: RegisterDto) {
    console.log(requestBody);
    return await new AuthService().userRegister(requestBody);
  }
  @Post("login")
  public async userLogin(@Body() requestBody: LoginDto) {
    console.log(requestBody);
    return await new AuthService().userLogin(requestBody);
  }

  @Get("activate/{token}")
  async emailConfiramtion(@Path() token: string) {
    return await new AuthService().emailConfiramtion({ token });
  }
  @Security("jwt")
  @Delete("logout")
  async userLogout(@Request() req: any) {
    return await new AuthService().userLogout(req.user);
  }
}
