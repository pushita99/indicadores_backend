import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface"
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy) {
        
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {
        super({
          secretOrKey: process.env.JWT_SECRET,
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
      }
    
    async validate (payload: JwtPayload ) : Promise<User>{       

        const {id} = payload;

        const user = await this.userRepository.findOneBy({id});

        if (!user){
            throw new UnauthorizedException('Token no valido')
        }
        else if (user.status === false)
            throw new UnauthorizedException('Usuario no activo')

        return user;
    }
}