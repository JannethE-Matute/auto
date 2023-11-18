import { Injectable } from '@angular/core';

export interface Automovil{
  idx:number;
  nombre: string;
  bio: string;
  mas_informacion: string;
  img: string;
  fabricacion: string;
  casa: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutomovilesService {

  constructor() { 
    console.log('Lista el servicio para p63');
  }
  private automoviles:Automovil[]=[
    { 
        idx:1,
         nombre: "Ferrari",
         bio: "Otra marca italiana legendaria, Ferrari, es símbolo de elegancia y prestigio. Sus automóviles son reconocidos por su potencia, diseño aerodinámico y una experiencia de conducción inigualable. Por eso está en la lista de las 10 mejores marcas de automóviles del mundo.",
         mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
         img: "assets/img/ferrari1.png",
         fabricacion: "1939-10-05",
         casa:"Ferrari"
       },
       {
        idx:2,
         nombre: "Lamborghini",
         bio: "Hablar de Lamborghini es hablar de superdeportivos de ensueño. Esta marca italiana se caracteriza por sus vehículos de alto rendimiento, diseño vanguardista y una pasión desbordante por la velocidad.",
         mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
         img: "assets/img/lamborghini.png",
         fabricacion: "1963-05-20",
         casa:"Lamborghini"
       },
       {
       idx:3,
         nombre: "Mercedes-Benz",
         bio: "Con una larga trayectoria en la fabricación de automóviles de lujo, Mercedes-Benz encabeza la lista de las 10 mejores marcas de automóviles. Sus vehículos combinan elegancia, tecnología de vanguardia y un rendimiento excepcional.",
         mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
         img: "assets/img/mercedes-benz.jpg",
         fabricacion: "1964-01-01",
         casa: "Mercedes-Benz"
       },
       {
       idx:4,
         nombre: "BMW",
         bio: "Otra marca alemana reconocida mundialmente es BMW, que se destaca por su diseño innovador y una experiencia de conducción única. Sus automóviles ofrecen un equilibrio perfecto entre deportividad y lujo.",
         mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
         img: "assets/img/BMW.png",
         fabricacion: "1929-07-10",
         casa:"BMW"
       },
       {
       idx:5,
         nombre: "Audi",
         bio: "La marca de los cuatro anillos se ha ganado su reputación gracias a su estilo distintivo y su compromiso con la ingeniería de precisión. Los automóviles Audi son sinónimo de lujo, confort y alto rendimiento.",
         mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
         img: "assets/img/audi.png",
         fabricacion: "1909-07-16",
         casa: "Audi"
       },
       {
       idx:6,
         nombre: "Porsche",
         bio: "Si se trata de deportividad y rendimiento, Porsche es la marca a considerar. Sus vehículos deportivos ofrecen una experiencia de conducción excepcional y un diseño icónico que los distingue.",
         mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
         img: "assets/img/porsche.png",
         fabricacion: "1931-04-25",
         casa: "Porsche"
       },
       {
       idx:7,
         nombre: "Jaguar",
         bio: "Esta marca británica ha sabido combinar a la perfección la elegancia clásica con la tecnología moderna. Sus automóviles ofrecen un equilibrio entre lujo, rendimiento y sofisticación.",
         mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
         img: "assets/img/jaguar1.png",
         fabricacion: "1974-11-01",
         casa: "Jaguar"
       },
       {
        idx:8,
          nombre: "Lexus",
          bio: "Lexus se ha consolidado como una marca de automóviles de lujo y calidad superior. Sus vehículos destacan por su confiabilidad, confort y avanzadas características tecnológicas.",
          mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
          img: "assets/img/lexus.png",
          fabricacion: "1974-11-01",
          casa: "Lexus"
        },
        {
          idx:9,
            nombre: "Volvo",
            bio: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
            mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
            img: "assets/img/volovo1.png",
            fabricacion: "1915-05-11",
            casa: "Volvo"
          },
          {
            idx:10,
              nombre: "Tesla",
              bio: "La marca de vehículos eléctricos creada por el magnate Elon Musk ha revolucionado la industria automotriz. Sus automóviles eléctricos de alto rendimiento y tecnología innovadora han dejado una marca indeleble en el mercado.",
              mas_informacion: "Reconocida por su compromiso con la seguridad y la innovación, Volvo ha ganado terreno en el mercado de automóviles de lujo. Sus vehículos ofrecen un diseño elegante, tecnología de punta y altos estándares de seguridad.",
              img: "assets/img/tesla2.png",
              fabricacion: "1974-11-01",
              casa: "Tesla"
          }
    ];
getAutomoviles():Automovil[]{
    return this.automoviles;
}
getAutomovil(idx:string):Automovil{
  return this.automoviles[Number(idx)];
}
buscarAutomoviles(texto1:string):Automovil[]{
  let automovilesArr:Automovil[]=[];
  texto1=texto1.toLowerCase();
  for(let automovil1 of this.automoviles){
    let nombre=automovil1.nombre.toLowerCase();
    if(nombre.indexOf(texto1)>=0){
      automovilesArr.push(automovil1);
    }
  }
  return automovilesArr;
}
  
}
