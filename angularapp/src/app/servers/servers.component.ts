import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  name: string = 'CodemindTechnology';
  serverId: number = 37;
  serverStatus: string = 'Online';
  allowedNewServer = false;
  
  ServerCreationStatus = 'serve not created';
  serverName : string = 'Codemind'

  constructor(){
    setTimeout(()=> {
      this.allowedNewServer  = true;
    }, 5000)
  }

  
  ngOnInit() {
  
  }

getServerStatus(){
  return this.serverStatus;
}
  OnCreateSetver(){
     this.ServerCreationStatus = 'Server Cerated'
  }
}
