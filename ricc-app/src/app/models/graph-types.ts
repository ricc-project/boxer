import { components } from './components';

export class GraphComponent{

    get(name){
        let component = components.find(t => t.name === name)

        if (component === undefined){
            return null;
        }
    
        return component
    }

    all(){
        return components;
    }

}