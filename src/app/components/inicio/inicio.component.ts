import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'masculino';

  //Creamos la clase router
  constructor(private router: Router) {
    // De esta manera desde el ts nos dirigimos al componente resultado
  }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }
  masculino() {
    this.sexo = 'masculino';
  }
  femenino() {
    this.sexo = 'femenino';
  }
  calcularBMI() {
    //con Math.pow realizo potencia
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }
}
