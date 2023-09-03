import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  @Input() heroe:any ={}; 
  @Input() index:any;
  @Output() heroeSeleccionado : EventEmitter<any>;

  constructor(private router:Router){
    this.heroeSeleccionado = new EventEmitter();
  }

  verHeroe() {
    this.heroeSeleccionado.emit(this.index); 

    this.router.navigate(['/heroe',this.index]);
  }

}
