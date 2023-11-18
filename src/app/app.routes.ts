import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { AutomovilComponent } from "./components/automovil/automovil.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { AutomovilesComponent } from "./components/automoviles/automoviles.component";
const APP_ROUTES:Routes=[
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'automoviles', component:AutomovilesComponent},
    {path:'automovil/:id', component:AutomovilComponent},
    {path:'buscar/:texto1', component:BuscadorComponent},

    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);