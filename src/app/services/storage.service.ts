import { Injectable } from '@angular/core';
import { pokemons } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public pokemons: pokemons[] = [];

  constructor() { }

  // We save a new pokemons in a Storage
  savePokemon(pokemon: pokemons) {

    let tempPokemons: any = localStorage.getItem('pokemons');
    this.pokemons = JSON.parse(tempPokemons);

    if (this.pokemons !== null) {
      this.pokemons.push(pokemon);
      localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
    } else {
      localStorage.setItem('pokemons', JSON.stringify([pokemon]));
    }

    return true;

  }

  // We save a new pokemons in a Storage
  getPokemons(typePokemon: number) {

    let tempTypePokemon: string = typePokemon.toString()

    let tempPokemons: any = localStorage.getItem('pokemons');
    tempPokemons = JSON.parse(tempPokemons);

    this.pokemons = [];
    console.log(tempPokemons);
    if (tempPokemons !== null) {

      for (let i = 0, iLen = tempPokemons.length; i < iLen; i++) {
        if (tempPokemons[i].type === tempTypePokemon) {
          this.pokemons.push(tempPokemons[i]);
        }
      }
    }

    return this.pokemons;

  }


}
