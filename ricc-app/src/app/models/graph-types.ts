import { components } from './components';
import { Card } from './card';

export class GraphComponent{

    get(name){
        let component = components.find(t => t.name === name)

        if (component === undefined){
            return null;
        }
        
        let card = new Card(null, component.filter, component.description, component.name, component.card_type)
        return card;
    }

    all(){
        return components;
    }

}