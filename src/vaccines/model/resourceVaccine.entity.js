export class ResourceVaccine {
    constructor(
        name = "",
        description = "",
        date_expiration = ""
    ) {
        this.name = name;
        this.description = description;
        this.date_expiration = date_expiration;
    }
}