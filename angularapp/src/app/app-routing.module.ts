import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddusserComponent } from './addusser/addusser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DefaultComponent } from './default/default.component';
// import { DemoComponent } from './demo/demo.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UnSavedChangesGuard } from './un-saved-changes.guard';




const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}, //localhost://4200/
  {path: 'aboutus', component: AboutusComponent}, //localhost://4200/aboutus
  {path: 'contactus', component: ContactusComponent},
  {path: 'post', component: DemopostComponent},
  {path: 'post-details/:id', component: PostDetailsComponent},
  {path: 'addusser', component: AddusserComponent, canDeactivate: [UnSavedChangesGuard]},
  {path: 'product', canActivate: [AuthGuard], loadChildren: './product/products.module#ProductsModule'},//lazy Loading syntax
  {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
  {path: '**', component: DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
