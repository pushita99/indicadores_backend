import { Indicator } from "src/indicator/entities/indicator.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ()
export class Measurementunit {
    @PrimaryGeneratedColumn ()
    id: number;
    
    @Column ("text",{unique:true})
    name: string;
    
    @OneToMany (   
        () => Indicator,
        (indicator) => indicator.measurementunit         
    )
    indicators: Indicator;
}
