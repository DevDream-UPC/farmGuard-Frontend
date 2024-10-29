export class Vaccine {
    constructor(
        id=0,
        name = "",
        description = "",
        date_expiration = ""
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date_expiration = date_expiration;
    }
}