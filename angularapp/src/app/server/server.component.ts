import { Component } from "@angular/core";

@Component({
    selector :'app-server',
    template : `<h1 class="text"> This is my server Component </h1>
    <h1 id="text1"> This is h1 </h1> 
    {{name}}`,
    styleUrls : ['./server.component.css']
})

export class ServerComponent{
    name : string ='CodemindTechnology';

}