import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { warningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule } from '@angular/forms';
import { TwowayComponent } from './twoway/twoway.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DemocourseComponent } from './democourse/democourse.component';
import { NgswitchassignComponent } from './ngswitchassign/ngswitchassign.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DirectivesComponent } from './directives/directives.component';
import { CusdirassinDirective } from './cusdirassin.directive';
import { DemoComponent } from './demo/demo.component';
import { InputdecComponent } from './inputdec/inputdec.component';
import HooksComponent from './hooks/hooks.component';
import { AssigndirectivesComponent } from './assigndirectives/assigndirectives.component';
import { DocheckassigComponent } from './docheckassig/docheckassig.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { AccountformComponent } from './accountform/accountform.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    warningComponent,
    SuccessComponent,
    TwowayComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    DemocourseComponent,
    NgswitchassignComponent,
    AttriComponent,
    CustdirDirective,
    DirectivesComponent,
    CusdirassinDirective,
    DemoComponent,
    InputdecComponent,
    HooksComponent,
    AssigndirectivesComponent,
    DocheckassigComponent,
    SimpleformComponent,
    AccountformComponent,
    StudentformComponent,
    StudentregistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
