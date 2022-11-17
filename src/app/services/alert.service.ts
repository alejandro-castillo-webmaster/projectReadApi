import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  // Succes alert
  correct(name: string) {

    Swal.fire({
      title: 'Éxito',
      text: `Se ha guardado correctamente su pokemon ${name}.`,
      icon: 'success'
    })

    setTimeout(function () {
      Swal.close();
    }, 2000);

  }

  // Error alert
  error(name: string) {
    Swal.fire({
      title: 'Error',
      text: `Se ha producido un error al intentar guardar su pokemon ${name}. Por favor intentelo de nuevo en unos instantes`,
      icon: 'success'
    })

    setTimeout(function () {
      Swal.close();
    }, 2000);

  }
}
