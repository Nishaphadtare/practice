import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

  isShow : boolean = true;
  title: string = 'top 3 Movies';
  movies: Movie[] = [
    {title: '3 Ideots', director: 'Rajkumar', cast: 'Amir Khan', releaseDate: '2007'},
    {title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    {title: 'KGF', director: 'RockyBhai', cast: 'Yash', releaseDate: '2019'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
