import { Direction } from "src/direction/entities/direction.entity";
import { Indicatorcompanydirection } from "src/indicatorcompanydirection/entities/indicatorcompanydirection.entity";
import { Planification } from "src/planification/entities/planification.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ()
export class Company {
    @PrimaryGeneratedColumn ()
    id: number;
    
    @Column ("text",{unique:true})
    name: string;

    @ManyToMany (
        () => Direction, (directions) => directions.companies
    )
    @JoinTable ()
    directions: Direction [];
    
    @OneToMany (
        () => Indicatorcompanydirection,
        (indicatorcompanydirection) => indicatorcompanydirection.company     
    )
    indicatorcompanydirections?: Indicatorcompanydirection;
    

    @OneToMany (
        () => Planification,
        (planification) => planification.company     
    )
    planifications?: Planification;
}
