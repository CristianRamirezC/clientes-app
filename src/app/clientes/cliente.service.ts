import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json'; //arreglo CLIENTES del archivo json que contiene lista de objetos cliente
import { Cliente } from './cliente'; //objeto cliente del archivo component
import { of, Observable } from 'rxjs'; // apis para stream o flujo de datos, observables.
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint:string = 'http://localhost:8080/api/clientes';  //URL de donde vamos a consultar datos

  constructor(private http:HttpClient) { //creamos un objeto de tipo HttpClient

  }

  getClientes(): Observable<Cliente[]>{  //configuramos el tipo de dato a retornar en un observable
    //return of(CLIENTES);  //convertimos/creamos nuestro flujo Observable a partir de los objetos CLIENTES
    return this.http.get<Cliente[]>(this.urlEndpoint); //metodo get devuelve json y lo casteamos a Cliente[]
  }
}
