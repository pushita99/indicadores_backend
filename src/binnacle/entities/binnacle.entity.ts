import { User } from "src/security/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Binnacle {

    @PrimaryGeneratedColumn ()
    id: number;
    
    @Column ('text', {
        unique: true,
    })
    action: string;

    @ManyToOne (   
        () => User,
        (user) => user.binnacles         
    )
    user: User;
    
}
