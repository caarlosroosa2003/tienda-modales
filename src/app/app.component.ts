import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda';

  sacarModal(name: string, text: string) {
    Swal.fire({
      icon: "question",
      title: "¿Desea añadir al carrito este producto: " + name + "?",
      text: text,
      showDenyButton: true,
      confirmButtonText: "Añadir",
      denyButtonText: `No anadir`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Se ha añadido correctamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Se ha cancelado la operación", "", "error");
      }
    });
  }
}
