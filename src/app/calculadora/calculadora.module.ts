import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
