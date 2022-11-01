import "reflect-metadata"
import { DataSource } from "typeorm"
import { Binnacle } from "./binnacle/entities/binnacle.entity"
import { Company } from "./company/entities/company.entity"
import { Direction } from "./direction/entities/direction.entity"
import { Indicator } from "./indicator/entities/indicator.entity"
import { Indicatorcompanydirection } from "./indicatorcompanydirection/entities/indicatorcompanydirection.entity"
import { Measurementunit } from "./measurementunit/entities/measurementunit.entity"
import { Planification } from "./planification/entities/planification.entity"
import { Security } from "./security/entities/security.entity"


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "indicadores",
    entities: [Binnacle, Company, Direction, Indicator, Indicatorcompanydirection, Measurementunit, Planification, Security],
    synchronize: true,
    logging: false,
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))