import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { pokemons } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getData(type: number){
    return this.http.get<pokemons[]>(`${this.apiUrl}type/${type}`)
    .pipe(
      map((data: any) => {
        // console.log(data);
        // tslint:disable-next-line: no-string-literal
        return data['pokemon'];
      })
    );

  }
}
