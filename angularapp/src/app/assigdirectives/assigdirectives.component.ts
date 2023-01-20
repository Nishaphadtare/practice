import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigdirectives',
  templateUrl: './assigdirectives.component.html',
  styleUrls: ['./assigdirectives.component.css']
})
export class AssigdirectivesComponent implements OnInit {
  showSecret = false;
  Log = [];
  constructor() { }

  ngOnInit() {
  }
  onToggleSecret(){
    this.showSecret = !this.showSecret;
    this.Log.push(this.Log.length + 1);
  }
}
