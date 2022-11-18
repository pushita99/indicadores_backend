import { Company } from "src/company/entities/company.entity";
import { Indicator } from "src/indicator/entities/indicator.entity";
import { Indicatorcompanydirection } from "src/indicatorcompanydirection/entities/indicatorcompanydirection.entity";
import { Planification } from "src/planification/entities/planification.entity";
import { User } from "src/security/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn , OneToMany, ManyToMany, JoinTable} from "typeorm";

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
    users: User;

    @ManyToMany (() => Company, (companies) => companies.directions)
    companies: Company [];

    @OneToMany (
        () => Indicatorcompanydirection,
        (indicatorcompanydirection) => indicatorcompanydirection.direction     
    )
    indicatorcompanydirections?: Indicatorcompanydirection[];

    @OneToMany (
        () => Planification,
        (planification) => planification.direction     
    )
    planifications?: Planification[];    

    @ManyToMany (() => Indicator, (indicator) => indicator.directions)
    indicators: Indicator [];
}