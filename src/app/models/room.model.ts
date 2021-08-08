export class Room {
    type!: string;
        size!: number;
        facilities!: string[];
        view!: string;
        sale!:boolean;
        reserved!:boolean;
        prise!:number;
        smoking!:boolean;
        parking!:boolean;
        pictures!:any[];
        animals!:boolean;
        children!:{
            toSixYearsOld: any;
            fromSixToTvelve: any;
        }

constructor(type: string,
    size: number,
    facilities: string[],
    view: string,
    sale:boolean,
    reserved:boolean,
    prise:number,
    smoking:boolean,
    parking:boolean,
    pictures:any[],
    animals:boolean,
    children:{
        toSixYearsOld: any,
        fromSixToTvelve: any,
    }){
this.size = size;
this.facilities = facilities;
this.view = view;
this.sale = sale;
this.reserved = reserved;
this.prise = prise;
this.smoking = smoking;
this.parking = parking;
this.pictures = pictures;
this.animals = animals;
this.children = children;

}

}