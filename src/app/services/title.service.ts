import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {filter,map,mergeMap}from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title,private router: Router,private activatedRoute: ActivatedRoute) { }
  updateTitle(title?:string){
    if(!title){
      this.router.events.pipe(
        filter((event)=>event instanceof NavigationEnd),
        map(()=>this.activatedRoute),
        map((route)=>{
          while(route.firstChild){route=route.firstChild;}
          return route;
        }),
        filter((route)=>route.outlet==='primary'),
         mergeMap((route) => route.data)).subscribe((event) => {
            this.title.setTitle(event['title'] + ' | MITS');
          });
      
    }
    else {
      this.title.setTitle(title + ' | MITS');
    }
  }
}
