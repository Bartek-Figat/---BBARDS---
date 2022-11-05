import { Controller, Post, Route, Body } from "tsoa";
import { RegisterDto, LoginDto } from "./auth.dto";
import { AuthService } from "./authServer";

@Route("api/v1")
export class AuthController extends Controller {
  @Post("registration")
  public async userRegister(@Body() requestBody: RegisterDto) {
    return await new AuthService().userRegister(requestBody);
  }
  @Post("login")
  public async userLogin(@Body() requestBody: LoginDto) {
    return await new AuthService().userLogin(requestBody);
  }
}
