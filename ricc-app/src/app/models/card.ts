export class Card {
    description: string;
    name: string;
    type: any;
    url: string;
    filter: Array<String>;

    constructor(url: string, filter: Array<String>, description: string, name: string, type: any){
        this.description = description;
        this.name = name;
        this.type = type;
        this.url = url;
        this.filter = filter;
    }
}