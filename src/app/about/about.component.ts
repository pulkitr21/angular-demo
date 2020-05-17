import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  h1Style:boolean=false
  users:Object
  constructor(private data:DataService) { }

  ngOnInit() {
   this.data.getUsers().subscribe(data=>{
     this.users=data
     console.log(this.users);
   })
  }
  
  firstClick(){
    
    this.h1Style=true
  }
}
