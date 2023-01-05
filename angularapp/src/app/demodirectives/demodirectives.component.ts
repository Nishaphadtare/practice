import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';



@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

  isShow: boolean = false;
  title : string = 'Top 3 movies';
  movies : Movie [] = [
    {title : 'KGF', director : 'RockyBhai', cast: 'Yash', releaseDate: '2019'},
    {title : '3 Idiots', director : 'Rajkumar', cast: 'Amir', releaseDate: '2009'},
    {title : 'Tiger 3', director : 'Maneesh Sharma', cast: 'Amir', releaseDate: '2023'}

  ]


 
  constructor() { }

  ngOnInit() {
  }

}
