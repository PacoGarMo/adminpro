import { Component, OnInit } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log('Termino', mensaje)
    )
    .catch( error => console.log('Error en la promesa', error) );

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean>{

    return new Promise( (resolve, reject) => {

      let contador = 0;

      let intervarlo = setInterval( () => {

        contador += 1;
        console.log(contador);

        if ( contador === 3 ) {
          resolve(true);
          clearInterval(intervarlo);
        }

      }, 1000 );

    });

  }

}
