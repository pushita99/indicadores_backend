import { Indicatorcompanydirection } from "src/indicatorcompanydirection/entities/indicatorcompanydirection.entity";
import { Planification } from "src/planification/entities/planification.entity";
import { User } from "src/security/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn , OneToMany} from "typeorm";

@Entity()
export class Direction {
    @PrimaryGeneratedColumn ()
    id: number;
    
    @Column ("text",{unique:true})
    name: string;

    @OneToMany (
       () => User,
       (user) => user.direction
    )
    users: User

    @OneToMany (
        () => Indicatorcompanydirection,
        (indicatorcompanydirection) => indicatorcompanydirection.direction     
    )
    indicatorcompanydirections?: Indicatorcompanydirection;

    @OneToMany (
        () => Planification,
        (planification) => planification.direction     
    )
    planifications?: Planification;

}
