export class Animal {
    constructor(
        id = 0,
        id_animal = "",
        name="",
        species = "",
        vaccies = [],
        url_iot = "",
        url_photo = "",
        id_inventory = 0,
        location = "",
        hear_rate = 0,
        temperature=0
    ) {
        this.id = id;
        this.id_animal = id_animal;
        this.name = name;
        this.species = species;
        this.vaccies = vaccies;
        this.url_iot = url_iot;
        this.url_photo = url_photo;
        this.id_inventory = id_inventory;
        this.location = location;
        this.hear_rate = hear_rate;
        this.temperature = temperature;
    }
}