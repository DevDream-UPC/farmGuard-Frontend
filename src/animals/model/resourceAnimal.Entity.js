export class ResourceAnimal {
    constructor(
        name="",
        specie = "",
        urlIot = "",
        urlPhoto = "",
        location = "",
        hearRate = 0,
        temperature=0
    ) {
        this.name = name;
        this.specie = specie;
        this.urlIot = urlIot;
        this.urlPhoto = urlPhoto;
        this.location = location;
        this.hearRate = hearRate;
        this.temperature = temperature;

    }
}