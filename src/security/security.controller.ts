import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SecurityService } from './security.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ValidRoles } from './interfaces/valid-roles';
import { Auth } from './decorators/auth.decorator';

@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post(('register'))
  create(@Body() createSecurityDto: CreateUserDto) {
    return this.securityService.create(createSecurityDto);
  }
  
  @Post(('login'))
  login(@Body() loginUserDto: LoginUserDto) {
    return this.securityService.login(loginUserDto);
  }

  @Get('users')
  findAll() {
    return this.securityService.findAll();
  }

  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.securityService.findOne(+id);
  }

  @Get('private')
  @Auth(ValidRoles.user)
  test(){
    return {ok: 'test'};
  }

  @Patch('users/:id')
  update(@Param('id') id: string, @Body() updateSecurityDto: UpdateUserDto) {
    return this.securityService.update(+id, updateSecurityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.securityService.remove(+id);
  }
}
