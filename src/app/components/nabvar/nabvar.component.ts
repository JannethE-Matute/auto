import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutomovilesService } from 'src/app/servicios/automoviles.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent {

  constructor(private _automovilesService:AutomovilesService,
    private router:Router ){}
  buscarAutomovil(texto:string){
  console.log(this._automovilesService.buscarAutomoviles(texto));
  this.router.navigate(['/buscar',texto]);
  }

}
