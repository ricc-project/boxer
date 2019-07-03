export class Card {
    description: string;
    station : string;
    central : string;
    name: string;
    card_type: any;
    value: any;
    filter: Object;
    type: string;

    constructor(value: any, filter: Object, description: string, name: string, card_type: any, type: string){
        this.description = description;
        this.name = name;
        this.card_type = card_type;
        this.value = value;
        this.filter = filter;
        this.type = type;
    }
}