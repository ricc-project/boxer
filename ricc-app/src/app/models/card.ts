export class Card {
    description: string;
    name: string;
    card_type: any;
    url: string;
    filter: Array<String>;

    constructor(url: string, filter: Array<String>, description: string, name: string, card_type: any){
        this.description = description;
        this.name = name;
        this.card_type = card_type;
        this.url = url;
        this.filter = filter;
    }
}