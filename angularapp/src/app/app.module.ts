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
