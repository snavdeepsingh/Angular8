import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Navdeep";

  ngOnInit(){
    console.log(name)
  }

  onInput(e: Event){
    this.name = (<HTMLInputElement>e.target).value;
  }
}
