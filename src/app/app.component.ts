import { Component } from '@angular/core';
import { PhpserviceService } from './services/phpservice.service';
import { phpDelete } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_php';

  data: any = [];

  columnas: string[] = 
  ['id', 'carpeta', 'categoria', 'nombreSitio', 'url', 'usuario', 'estado', 'prod_Prom', 'fecha_Post', 'edit', 'delete'];

  constructor(
    private service: PhpserviceService
  ) { }

  ngOnInit() {
    this.mostrarDatos();
  }

  mostrarDatos() {

    this.service.getBusquedaFinal().pipe(

    ).subscribe((resultado) => {

      console.log('Resultado:', resultado);
      this.data = resultado

      return resultado
    }
    )
  }

  deleteDatos(id: any) {
    const payload = {
      id: id
    } as phpDelete
    console.log(payload);

    this.service.getDelete(payload).subscribe((resultado) => {
      console.log('Resultado:', resultado)
    })
  }

  editData(id: any) {

   }


}
