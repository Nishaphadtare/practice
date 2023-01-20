import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Products } from './models/product';
import { DemoService } from './services/demo.service';
// import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  data;
  name : string;
  price: number;
  appchildExist :  boolean = true;
  product: Products = new Products();
  public  uid : number;
 
constructor(private _demoService: DemoService){
 
}
distroy(){
  this.appchildExist = false;
}
userData : any = [];

ngOnInit(): void {
  this._demoService.getUsersData().subscribe(data => {
    console.log('getting data from api', data)
    this.userData = data;
    console.log('getting data from api', data);
    
  })
  // this._demoService.getDataPosts().subscribe(result=>{
  //   console.log('getting posts',result);
    
  // })
}

uname = 'I am from app component';
employeeRecords: any = [
  {
    eName: 'Nisha', eCity: 'Mumbai', eSalary: '50000'
  },
  {
    eName: 'Sneha', eCity: 'Pune', eSalary: '70000'
  }
]


foods: string[] = [];

getDataFromChild(value) {
  console.log(value);
  this.foods.push(value);
}

newArrayOfStudent: any[] = [];
getStudentData(value){
  // console.log(value);
  this.newArrayOfStudent=value;
}

handleData(value){
this.data= value.target.value;
}
updateProduct(){
  this.product = new Products;
  this.product.name = this.name;
  this.product.price = this.price;
}
}
