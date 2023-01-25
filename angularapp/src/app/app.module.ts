import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DemoComponent } from './demo/demo.component';
import {HttpClientModule} from '@angular/common/http';
import { OutputAssignmentComponent } from './output-assignment/output-assignment.component';
import { HooksComponent } from './hooks/hooks.component';
import { AssigdirectivesComponent } from './assigdirectives/assigdirectives.component';
import { SimpleTemplateComponent } from './simple-template/simple-template.component';
import { SimpleDrivenFormComponent } from './simple-driven-form/simple-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveformAssignComponent } from './reactiveform-assign/reactiveform-assign.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FilterPipe } from './filter.pipe';
import { CountPipe } from './count.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    AttriComponent,
    CustdirDirective,
    DemoComponent,
    OutputAssignmentComponent,
    HooksComponent,
    AssigdirectivesComponent,
    SimpleTemplateComponent,
    SimpleDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveformAssignComponent,
    Service1Component,
    Service2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PipesdemoComponent,
    FilterPipeComponent,
    FilterPipe,
    CountPipe,
    AboutusComponent,
    ContactusComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
   
    
  ],
    
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
