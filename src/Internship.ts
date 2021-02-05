import faker from "faker";
export class Internship {
    businessName:string;
    location: {
        latitude:number;
        longitude:number;
    }

    constructor() {
        this.businessName = faker.name.jobTitle()
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude:  parseFloat(faker.address.longitude())
        }
    }
}

