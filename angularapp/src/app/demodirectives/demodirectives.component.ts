import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

  isShow: boolean = true;
  title : string ="Top 3 Movies";
  movies: Movie [] = [
    {title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007'},
    {title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2002'},
    {title: 'KGF', director: 'RockyBhai', cast:'Yesh', releaseDate: '2009'}

  ]
  
  constructor() { }

  ngOnInit() {
  }

}
