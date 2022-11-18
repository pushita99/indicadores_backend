import { Company } from "src/company/entities/company.entity";
import { Direction } from "src/direction/entities/direction.entity";
import { Indicator } from "src/indicator/entities/indicator.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity ()
export class Indicatorcompanydirection {
     
    @PrimaryGeneratedColumn ()
    id: number;

    @Column ('text')
    value: number;

    @Column ("date")
    date: Date;

    @ManyToOne (
        () => Indicator,
        (indicator) => indicator.indicatorcompanydirections,
        {eager: true}
    )
    indicator: Indicator

    @ManyToOne (
        () => Company,
        (company) => company.indicatorcompanydirections,
        {eager: true}
    )
    company: Company

    @ManyToOne (   
        () => Direction,
        (direction) => direction.indicatorcompanydirections,
        {eager: true}         
    )
    direction: Direction
}
