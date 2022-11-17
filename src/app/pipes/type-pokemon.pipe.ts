import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typePokemon'
})
export class TypePokemonPipe implements PipeTransform {

  transform(type: string, ...args: unknown[]): string {
    let typePokemon: string = '';
    switch (type) {
      case '1':
        typePokemon = 'Normal';
        break;
      case '2':
        typePokemon = 'Fighting';
        break;
      case '3':
        typePokemon = 'Flying';
        break;
      case '4':
        typePokemon = 'Poison';
        break;
      case '5':
        typePokemon = 'Ground';
        break;
      case '6':
        typePokemon = 'Rock';
        break;
      case '7':
        typePokemon = 'Bug';
        break;
      case '8':
        typePokemon = 'Ghost';
        break;
      case '9':
        typePokemon = 'Steal';
        break;
      case '10':
        typePokemon = 'Fire';
        break;
      case '11':
        typePokemon = 'Water';
        break;
      case '12':
        typePokemon = 'Grass';
        break;
      case '13':
        typePokemon = 'Electric';
        break;
      case '14':
        typePokemon = 'Psychic';
        break;
      case '15':
        typePokemon = 'Ice';
        break;
      case '16':
        typePokemon = 'Dragon';
        break;
      case '17':
        typePokemon = 'Dark';
        break;
      case '18':
        typePokemon = 'Faire';
        break;
      default:
        typePokemon = '';
    }
    return typePokemon;
  }

}
