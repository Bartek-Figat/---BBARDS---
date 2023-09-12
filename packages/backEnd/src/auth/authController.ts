import { Controller, Post, Route, Body, Path, Get } from "tsoa";
import { LoginDto } from "./auth.dto";
import { AuthService } from "./authService";

@Route("api/v1")
export class AuthController extends Controller {
  @Post("registration")
  async userRegister(@Body() requestBody: any) {
    return await new AuthService().userRegister(requestBody);
  }

  @Post("login")
  async userLogin(@Body() requestBody: LoginDto) {
    return await new AuthService().userLogin(requestBody);
  }

  @Get("activate/{token}")
  async emailConfiramtion(@Path() token: string) {
    return await new AuthService().emailConfiramtion({ token });
  }
}
