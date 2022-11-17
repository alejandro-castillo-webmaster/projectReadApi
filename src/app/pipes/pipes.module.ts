import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePokemonPipe } from './type-pokemon.pipe';



@NgModule({
  declarations: [
    TypePokemonPipe
  ],
  exports:[
    TypePokemonPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
