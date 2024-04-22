import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { phpDelete } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PhpserviceService {

  constructor(
    private http: HttpClient
  ) { }

  getBusquedaFinal() {
    return this.http.get('http://localhost/Fb_enlaces/mostrarAngular.php').pipe(
      catchError(error => {
        console.error('Se produjo un error:', error);
        return throwError(error);
      })
    );
  }

  getDelete(body: phpDelete) {
    return this.http.post('http://localhost/Fb_enlaces/delete_id_Angular.php', body).pipe(
      catchError(error => {
        console.error('Se produjo un error:', error);
        return throwError(error);
      })
    );
  }

  
}
