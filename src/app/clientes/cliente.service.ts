import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json'; //arreglo CLIENTES del archivo json que contiene lista de objetos cliente
import { Cliente } from './cliente'; //objeto cliente del archivo component
import { of, Observable } from 'rxjs'; // apis para stream o flujo de datos, observables.


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]>{  //configuramos el tipo de dato a retornar en un observable
    return of(CLIENTES);  //convertimos/creamos nuestro flujo Observable a partir de los objetos CLIENTES
  }
}
