import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
progressValue:number;
rangeArray:number[];
  constructor() { 
    this.progressValue=0;
    this.rangeArray=new Array(100)
  }
@HostListener("window:scroll",[])onWindowScroll(){
  var element=document.documentElement,
  body=document.body,
  scrollTop='scrollTop',
  scrollHeight='scrollHeight'
  this.progressValue=(element[scrollTop]||body[scrollTop])/((element[scrollHeight]||body[scrollHeight]) - element.clientHeight) * 100;

}
  ngOnInit(): void {
  }

}
