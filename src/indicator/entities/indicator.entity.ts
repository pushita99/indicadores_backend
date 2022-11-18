import { MaxLength } from "class-validator";
import { Direction} from "src/direction/entities/direction.entity";
import { Indicatorcompanydirection } from "src/indicatorcompanydirection/entities/indicatorcompanydirection.entity";
import { Measurementunit } from "src/measurementunit/entities/measurementunit.entity";
import { Planification } from "src/planification/entities/planification.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ()
export class Indicator {

    @PrimaryGeneratedColumn ()
    id: number;
    
    @Column ('text', {
        unique: true,
    })
    name: string;

    @Column ('text')    
    description: string;
    
    @ManyToOne (
       () => Measurementunit,
       (measurementunit) => measurementunit.indicators,
       {nullable: false,
        onDelete: 'CASCADE',}
    )
    measurementunit: Measurementunit;

    @ManyToMany (() => Direction, (direction) => direction.indicators)
    @JoinTable ()
    directions: Direction [];        

    @OneToMany (
        () => Indicatorcompanydirection,
        (indicatorcompanydirection) => indicatorcompanydirection.indicator     
    )
    indicatorcompanydirections?: Indicatorcompanydirection;
  
    @OneToMany (
        () => Planification,
        (planification) => planification.indicator     
    )
    planifications?: Planification;
  

}
