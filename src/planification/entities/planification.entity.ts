import { Company } from "src/company/entities/company.entity";
import { Direction } from "src/direction/entities/direction.entity";
import { Indicator } from "src/indicator/entities/indicator.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Planification {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column ('integer')
    january: number;
    @Column ('integer')
    february: number;
    @Column ('integer')
    march: number;
    @Column ('integer')
    april: number;
    @Column ('integer')
    may: number;
    @Column ('integer')
    june: number;
    @Column ('integer')
    july: number;
    @Column ('integer')
    august: number;
    @Column ('integer')
    september: number;
    @Column ('integer')
    october: number;
    @Column ('integer')
    november: number;
    @Column ('integer')
    december: number;

    @Column ('date')
    date: Date;

    @ManyToOne (
        () => Indicator,
        (indicator) => indicator.planifications
    )
    indicator: Indicator

    @ManyToOne (
        () => Company,
        (company) => company.planifications
    )
    company: Company

    @ManyToOne (   
        () => Direction,
        (direction) => direction.planifications         
    )
    direction: Direction
}
