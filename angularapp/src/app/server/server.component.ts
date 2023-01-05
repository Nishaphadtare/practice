import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    template: '<h1> This is my server component </h1> {{name}}',
    styleUrls: ['./server.component.css']
})

export class ServerComponent{
    
    name : string = 'codemind';

}