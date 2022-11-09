import {
  Controller,
  Post,
  Route,
  Body,
  Path,
  Get,
  Security,
  Request,
} from "tsoa";
import { LoginDto } from "./auth.dto";
import { AuthService } from "./authServer";

@Route("api/v1")
export class AuthController extends Controller {
  @Post("registration")
  async userRegister(@Body() requestBody: any) {
    const response: any = await new AuthService().userRegister(requestBody);
    this.setStatus(response.statusCode);
  }
  @Post("login")
  async userLogin(@Body() requestBody: LoginDto) {
    return await new AuthService().userLogin(requestBody);
  }

  @Get("activate/{token}")
  async emailConfiramtion(@Path() token: string) {
    return await new AuthService().emailConfiramtion({ token });
  }
  @Security("jwt")
  @Get("logout")
  async userLogout(@Request() req: any) {
    console.log(req.user);
    return await new AuthService().userLogout(req.user);
  }
}
