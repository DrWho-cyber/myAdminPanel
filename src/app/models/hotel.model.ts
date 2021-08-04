export enum Status {
    user = 0,
    VIP = 1,
}

export enum Stars {
    one = 0,
    two = 1,
    three = 3,
    four = 4,
    five = 5,
}

export class Hotel{
    public key!:string;
    public name!:string;
    public address!:string;
    public phone!:number;
    public email!:string;
    public stars!:Stars;
    public profilePicture!:string;
    public status!:Status;

    constructor(key:string, name:string, address:string,phone:number,email:string,stars:Stars,status:Status){
     this.key = key;
     this.name = name;
     this.address = address;
     this.phone = phone;
     this.email = email;
     this.stars = stars;
     this.profilePicture = this.profilePicture;
     this.status = status;
    }


}