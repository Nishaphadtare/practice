import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';
// import { OrdersModule } from '../orders/orders.module';


const prodRoutes : Routes = [
  {path: '', component: ProductComponent, children: [
    {path: 'laptop', component: LaptopComponent},
    {path: 'mobile', component: MobileComponent},
    {path: 'tablet', component: TabletComponent},
    {path: 'tv', component: TvComponent}
  ]},
]


@NgModule({
  declarations: [
    ProductComponent,
    // OrdersModule,
    LaptopComponent,
    TabletComponent,
    MobileComponent,
    TvComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule,
  
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsModule { }
