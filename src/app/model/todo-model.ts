import { propertyMap } from '../functions/propertyMap';
import { statusConverter } from '../functions/statusConverter';

export class TodoModel {
    /**
     *
     */
    constructor() {
        this.id=null;
        this.name=null;
        this.completed=null;
    }
    public id:string;
    @propertyMap('title')
    public name: string;
    @statusConverter
    public completed: string;
}
