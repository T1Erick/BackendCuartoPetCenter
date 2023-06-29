import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { UserAuthDto } from './dto/log-in.dto';

@Controller('auth')
export class LoginController {
    constructor(private readonly loginService: LoginService){}
    
    @Post('login')
  async login(@Body() { email, password }: UserAuthDto){
    const userValidate = await this.loginService.validateUser(
      email,
      password
    );

    if (!userValidate) {
      throw new Error('Usuario o contraseña incorrectos');
    }
    
    const jwt = await this.loginService.generateJWT(userValidate);
    return jwt;
  }

}
