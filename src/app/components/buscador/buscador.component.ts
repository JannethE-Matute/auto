import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutomovilesService } from 'src/app/servicios/automoviles.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {
  automoviles:any[]=[];
  texto2:string='';

  constructor(private activatedRoute:ActivatedRoute,
              private _automovilesService:AutomovilesService,
              private router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activatedRoute.params.subscribe(params=>{
      this.texto2=params['texto1'];
      this.automoviles=this._automovilesService.buscarAutomoviles(this.texto2);
      console.log('AUTOMOVILES:',this.automoviles);
    });
  }
  verAutomovil(ind:number){
    this.router.navigate(['/automovil',ind]);
  }
}
