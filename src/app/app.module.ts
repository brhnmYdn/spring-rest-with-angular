import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {  FormsModule} from '@angular/forms';
import { CalculatorService } from './service/calculator.service';
import { HttpClientModule } from '@angular/common/http';
import {DivideService} from './service/divide.service';
import {MultiplyService} from './service/multiply.service';
import {SubstractService} from './service/substract.service';
import {SumService} from './service/sum.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalculatorService, DivideService, MultiplyService, SubstractService, SumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
