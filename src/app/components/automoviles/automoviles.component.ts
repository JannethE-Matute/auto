import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil, AutomovilesService } from 'src/app/servicios/automoviles.service';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styles: [
  ]
})
export class AutomovilesComponent {
  constructor(private _automovilesService:AutomovilesService,
    private router:Router){

  }
  automoviles:Automovil[]=[];
  ngOnInit(){
  this.automoviles=this._automovilesService.getAutomoviles();
  }
  verAutomovil(ind:number){
  this.router.navigate(['/heroe',ind]);
  }
}



