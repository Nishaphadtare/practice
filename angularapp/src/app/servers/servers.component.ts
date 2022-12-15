import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent  {
name: string = 'CodemindTechnology'
serversId : number = 36;
serverStatus : string = 'Offline';
allowNewServer = false;
serverCreationStatus : string = 'server is not created';


serverName: string = 'Codemind.com';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
     }, 5000);
   }

  getServerStatus() {
     return this.serverStatus;
    }

    onCreationServer() {
      this.serverCreationStatus = 'server is Created'
    }
  
}

