import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {

  }
  
  logo : string = "";
  colorHouse: string = "";

  constructor(private activateRoute:ActivatedRoute,
              private _heroeService:HeroesService){

    this.activateRoute.params.subscribe( params => {

      console.log( params['id'] );

      this.heroe = this._heroeService.getHeroe(params['id']);

      if (this.heroe['casa'] == "DC") {

        this.logo = "assets/img/dc-logo.png";
        this.colorHouse = "primary";

      }else if (this.heroe['casa'] == "Marvel"){

        this.logo = "assets/img/marvel-logo.jpg";
        this.colorHouse = "danger";

      }
      
    } );
  }
}
