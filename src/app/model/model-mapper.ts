export class ModelMapper<T> {
    propertyMapper:any;
    target:any;
    constructor(type:{new():T;}){
        this.target=new type();
        this.propertyMapper=this.target.constructor.propertyMap;
    }
    map(source){
        Object.keys(this.target).forEach((key)=>{
            const mapperKey=this.propertyMapper[key]
            if(mapperKey){
                this.target[key]=source[mapperKey];
            }
            else{
                this.target[key]=source[key];
            }
        });
        Object.keys(source).forEach((key)=>{
            const targetKeys=Object.keys(this.target);
            if(targetKeys.indexOf(key)==-1){
                this.target[key]=source[key];
            }
        });
        return this.target;
    }
}
