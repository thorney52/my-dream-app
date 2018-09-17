import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']
  constructor() { 
    setTimeout(() => { this.allowNewServer = true }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    console.log("here")
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! The name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
