import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data: string = 'red';
name:string;
price: number;
product: Product = new Product();
  public uid: number;
  title = 'Angular learning';
  uname = 'I am from app component';

  

  // EmployeeRecords: any =[
  //   {
  //     eName: 'Nisha', eCity: 'Mumbai', eSalary: '200000'
  //   },
  //   {
  //     eName: 'Sneha', eCity: 'pune', eSalary: '150000'
  //   }
  // ]

  EmployeeInfo : any = [
    {
      emp_id: " 1", emp_name: "Sneha",  emp_company: 'Infosys',  emp_salary: '200000'
    },
  ]

  appchildExilt: boolean = true;
  
  Destroy(){
    this.appchildExilt = false;
  }
  

  handleData(value) {
    this.data= value.target.value
  }
  updateProduct() {
    // this.product = new Product; 
    this.product.name = this.name;
    this.product.pricce = this.price;
  }
}
