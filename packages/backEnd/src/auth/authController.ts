import { HttpResponse } from "src/httpError/httpError";
import {
  Controller,
  Post,
  Route,
  Body,
  Path,
  Get,
  Security,
  Request,
  Example,
} from "tsoa";
import { LoginDto } from "./auth.dto";
import { AuthService } from "./authService";

@Route("api/v1")
export class AuthController extends Controller {
  @Example({
    email: "hello@tsoa.com",
    password: "unique password",
  })
  /**
   * Registration requires a valid email address and unique password.
   */
  @Post("registration")
  async userRegister(@Body() requestBody: any) {
    return await new AuthService().userRegister(requestBody);
  }
  @Example<LoginDto>(
    {
      email: "hello@tsoa.com",
      password: "unique password",
    },
    "Data Response"
  )
  @Example<HttpResponse>(
    {
      data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      error: null,
      statusCode: 200,
    },
    "Response 200"
  )
  @Example<HttpResponse>(
    {
      data: "null",
      error: "400",
      statusCode: 400,
    },
    "Response 400"
  )

  /**
   * Login requires a valid email address and password.
   */
  @Post("login")
  async userLogin(@Body() requestBody: LoginDto) {
    console.log(await new AuthService().userLogin(requestBody));
    return await new AuthService().userLogin(requestBody);
  }

  /**
   * Email the token to authenticate the user
   * @param token Token
   */
  @Get("activate/{token}")
  async emailConfiramtion(@Path() token: string) {
    return await new AuthService().emailConfiramtion({ token });
  }

  /**
   * Logout require valid token from header
   *
   */
  @Security("jwt")
  @Get("logout")
  async userLogout(@Request() req: any) {
    return await new AuthService().userLogout(req.user);
  }
}
