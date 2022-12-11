import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigndirectives',
  templateUrl: './assigndirectives.component.html',
  styleUrls: ['./assigndirectives.component.css']
})
export class AssigndirectivesComponent implements OnInit {

  showSecret=false;
  log = []  ;
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecret =!this.showSecret;
    this.log.push(this.log.length + 1);
  }

}

