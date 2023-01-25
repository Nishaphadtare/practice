import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {
  nameSearch : string = '';
  productArr : any [] = [
    {
      sno: '1',
      name: 'Mobile',
      price: '7000',
      availability: 'Available'
    },
    {
      sno: '2',
      name: 'Laptop',
      price: '32000',
      availability: 'Available'
    },
    {
      sno: '3',
      name: 'Tab',
      price: '15000',
      availability: 'NotAvailable'
    },
    {
      sno: '4',
      name: 'Washing Machine',
      price: '25000',
      availability: 'Available'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
