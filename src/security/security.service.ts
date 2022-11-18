import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity';
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SecurityService {
   
  private readonly logger = new Logger('User');

  constructor (
    @InjectRepository (User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
    ) {}

  async create(createUserDto: CreateUserDto) {
    const {password, ...userData} = createUserDto;
    try {
      const user = this.userRepository.create( {
        password: bcrypt.hashSync(password, 10),
        ...userData
      } );
      console.log(user);
      
      await this.userRepository.save(user);
      
    return {
      ...user,
      token: this.getJwtToken({id: user.id}) 
    };
    } catch (error) {
      this.handleDBExceptions(error); 
    } 
  }

  async login(loginUserDto: LoginUserDto) {
    const {password, email} = loginUserDto;

    const user = await this.userRepository.findOne({
      where: {email},
      //select : {email: true, password: true},
      relations: {
        direction: true,
      }
    })
    
    if (!user){
      throw new UnauthorizedException('Las credenciales son incorrectas (c)');
    }

    if (!bcrypt.compareSync(password, user.password)){
      throw new UnauthorizedException('Las credenciales son incorrectas (p)');
    }

    return {
        name: user.name,
        direction: user.direction,
        role: user.role,
        token: this.getJwtToken({id: user.id}) 
    };
  }

  findAll() {
    return this.userRepository.find({});
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({id});
    if (!user) throw new NotFoundException ('El usuario no fue encontrado');
    return user;
  }

  update(id: number, updateSecurityDto: UpdateUserDto) {
    return `This action updates a #${id} security`;
  }

  async remove(id: number) {
    const user = await this.findOne( id );
    await this.userRepository.remove ( user );
  }

  private handleDBExceptions( error: any){   
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error)
    throw new InternalServerErrorException ('Error inesperado');   
  }

  private getJwtToken(payload: JwtPayload){

    const token = this.jwtService.sign(payload);
    return token;
  }
}
