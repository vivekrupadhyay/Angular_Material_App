import { ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

export class DocumentValidators {
    static wordCountMin(target:number):ValidatorFn{
        return (fc:AbstractControl):{[key:string]:boolean} | null=>{
    if(fc.value && fc.value.replace(/<.*?>/gm,' ').trim().split(/\s+/).length<target){
    return ({wordCountMin:true});
    }
     return (null);
    };
  }
  static validateMinLength(min:number):ValidatorFn{
      return(control:AbstractControl):{[key:string]:any} | null =>{
          var div =document.createElement('div')
          div.innerHTML=control.value;
          var text=div.textContent;
       return text.length<min?{"ValidatioonLength":true}:null;
      };
  }
  static applicable(){
      return (fc:FormControl)=>{
          const strippedFormat=fc.value.replace(/<.*?>/gm,' ').trim();
          if(strippedFormat==="NA"){
              return({applicable:true});
          }
          if(strippedFormat==="N/A"){
            return({applicable:true});
        }
      }
  }
}
