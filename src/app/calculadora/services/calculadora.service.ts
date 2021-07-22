/**
 * Serviço que será responsável por execuatar as
 * operações da calculadora.
 * 
 * @author Daniel Fonseca da Silva <developer-web@programmer.com> 
 * @since 1.0.0
 * 
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  // Constantes
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  // Método de cálculo
  calcular(num1: number, num2: number, operacao: string): number {
  	let resultado: number; 

  	switch(operacao) {
  	  case CalculadoraService.SOMA:
  	    resultado = num1 + num2;
  		break;
  	  case CalculadoraService.SUBTRACAO:
  	    resultado = num1 - num2;
  		break;
  	  case CalculadoraService.DIVISAO:
  	    resultado = num1 / num2;
  		break;
  	  case CalculadoraService.MULTIPLICACAO:
  	    resultado = num1 * num2;
  		break;
  	  default:
  	    resultado = 0;
  	}

  	return resultado;
  }

}
