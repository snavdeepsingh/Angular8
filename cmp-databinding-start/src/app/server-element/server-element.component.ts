import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, 
  ElementRef, AfterContentInit,AfterViewInit, ContentChild

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  @ViewChild ('header', {static: true}) header: ElementRef;
  @ContentChild ('contentParagraph') paragraph: ElementRef;
 @Input('srvElement') element: { type: string, name: string, content: string};
 @Input() name: string;
  constructor() { 
    console.log('Constructor')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('Changes')
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Init')
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log(this.header.nativeElement.textContent);
  }



}
