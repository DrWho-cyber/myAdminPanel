enum Gender {
    Male = 0,
    Famale = 1,
}

export class User{
    public key!:string;
    public userName!:string;
    public surname!:string;
    public mail!:string;
    public password!:string;
    public age!:number;
    public gender!:Gender;
    public image!:string[];

    constructor(key:string, userName:string, surname:string, mail:string, password:string, age:number, gender:Gender, image:string[]){
        this.key = key;
        this.userName = userName;
        this.surname = surname;
        this.mail = mail;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.image = image;
    }
}