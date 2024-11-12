export class Profile {
    constructor(
        id = 0,
        firstName="",
        lastName="",
        email="",
        urlPhoto = "",
        idInventory = 0,
        userId = 0) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.urlPhoto = urlPhoto;
        this.inventoryId = idInventory;
        this.userId = userId;

    }

}
