import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildrentComponent } from '../childrent/childrent.component';

@Component({
  selector: 'ga-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
@ViewChild(ChildrentComponent) child: ChildrentComponent;
@ViewChild('childID') childID: ChildrentComponent;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log("------> child conten--> " + this.child.child_content);
    console.log("------> child valu--> " + this.child.valu);

    console.log("------> child id content--> " + this.child.child_content);
    console.log("------> child id valu--> " + this.child.valu);
  }
  
  log() {
    console.log("------> child conten--> " + this.child.child_content);
    console.log("------> child valu--> " + this.child.valu);

    console.log("------> child id content--> " + this.child.child_content);
    console.log("------> child id valu--> " + this.child.valu);
  }

}
