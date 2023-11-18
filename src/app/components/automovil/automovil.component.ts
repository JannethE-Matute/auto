import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Automovil, AutomovilesService } from 'src/app/servicios/automoviles.service';

@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html',
  styles: [
  ]
})
export class AutomovilComponent {
  automovil:Automovil={
    idx:0,
    nombre: "",
    bio: "",
    mas_informacion:'',
    img: "",
    fabricacion: "",
    casa:""
  };
  constructor(private activatedRoute:ActivatedRoute,
              private _automovilesService:AutomovilesService){
    this.activatedRoute.params.subscribe(params=>{
      //console.log('parametros_id:',params['id']);
      this.automovil=this._automovilesService.getAutomovil(params['id']);
    })
  }
}


