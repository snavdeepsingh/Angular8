import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @ViewChild ('server', {static: true}) serverValue: ElementRef;
  @Output() serverCreated =  new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated =  new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.serverValue.nativeElement.value = 'Set value';
    //   console.log(this.serverValue.nativeElement.value);
    // }, 3000);
    
  }

  onAddServer(server: HTMLInputElement) {
    // console.log(server.value);
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}
