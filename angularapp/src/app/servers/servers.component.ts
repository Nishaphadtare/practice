import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent  {

  name: string = 'CodmindTechnology';
  serverId : number = 37;
  serverStatus: string = 'Offline';
  allowNewServer = false;
  imgUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201`;

  serverCreationStatus : string = 'Server is not created';

  serverName: string = 'codemind.com';
  constructor() { 

   setTimeout(()=> {
    this.allowNewServer = true
  }, 5000);
  }
  

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer(){
   this.serverCreationStatus = 'server Created';
  }
}

