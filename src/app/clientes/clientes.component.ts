import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({    // decorador
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(  //getclientes va a ser observado por los Observadores. Usamos el metodo subscribe
      clientes => this.clientes = clientes //"Funcion Anonima" / este es nuestro observador
    );
  }
}
