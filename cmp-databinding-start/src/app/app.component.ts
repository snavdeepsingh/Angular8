import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

  onServerCreated(server: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent
    })
  }

  onBlueprintCreated(server: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: server.serverName,
      content: server.serverContent
    })
  }

  onFirstChange(){
    this.serverElements[0].name = 'Changed!'
  }

}
