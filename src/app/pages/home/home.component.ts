import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pokemons } from 'src/app/interfaces/pokemon';
import { AlertService } from 'src/app/services/alert.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public form!: FormGroup;
  public formSelect!: FormGroup;
  public isName: Boolean = false;
  public isWeight: boolean = false;
  public isType: boolean = false;
  public pokemons: pokemons[] = [];
  public typePokemon: number = 1;

  constructor(
    private fb: FormBuilder,
    public storageService: StorageService,
    public AlertService: AlertService,
    private pokemonService: PokemonService
  ) { }

  public ngOnInit() {
    this.createForm();
    this.createSelect();
    this.getPokemonsStorage();
    this.getPokemosService();
  }

  //We create de form
  createForm() {

    this.form = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      type: ['', Validators.required]
    });

  }

  //We create de form
  createSelect() {

    this.formSelect = this.fb.group({
      typePokemon: ['1', Validators.required]
    });

  }

  // We get all pokemons we are created and save in Storage
  getPokemonsStorage() {

    this.pokemons = [];
    this.pokemons = this.storageService.getPokemons(this.typePokemon);
    console.log(this.pokemons);

  }

  // We get pokemon data from api
  getPokemosService(){

    this.pokemonService
    .getData(this.typePokemon)
    .subscribe(
      (dataPokemon: pokemons[]) => {
      this.savePokemonsFromApi(dataPokemon.slice(0, 10));
      },
      (error: any) => {
        console.warn(error);
      }
    );

  }

  savePokemonsFromApi(tempPokemons: any){
   
    tempPokemons.forEach((value: any) => {
      let pokemon: pokemons = {
        'name': value.pokemon.name,
        'weight': Math.floor(Math.random() * 100) + 1,
        'type': this.typePokemon.toString()
      }
      this.pokemons.push(pokemon);

    });

    
  }


  // Save form
  enviarFormulario() {

    this.clearErrors();

    let notErrors = this.evaluateErrorsForm();

    // If we don't have errors, we continued
    if (notErrors) {
      console.log(this.form);
    } else {
      return;
    }

    let formValue: pokemons = {
      name: this.form.value.name,
      weight: this.form.value.weight,
      type: this.form.value.type
    };

    // We save a new pokemon in local storage
    let saveStorage = this.storageService.savePokemon(formValue);

    // We show the save operation ins correctly or no
    if (saveStorage) {
      this.AlertService.correct(formValue.name);
      // We reset input form
      this.resetForm();
      // We get data from storage
      this.getPokemonsStorage();
      this.getPokemosService();
    } else {
      this.AlertService.error(formValue.name);
      this.resetForm();
    }

  }

  // We clear all error before send form
  clearErrors() {

    this.isName = false;
    this.isWeight = false;
    this.isType = false;
    return;

  }

  // We evaluate form errors
  evaluateErrorsForm(): boolean {

    if (this.form.value.name.length < 3) {
      this.isName = true;
      return false
    }

    if (isNaN(this.form.value.weight) || this.form.value.weight < 1) {
      this.isWeight = true;
      return false
    }


    if (isNaN(this.form.value.type)) {
      this.isType = true;
      return false
    }

    return true;

  }

  // We reset form
  resetForm() {

    this.form.reset({
      name: '',
      weight: '',
      type: '',
    });

  }

  // We selected pokemon type
  selectTypePokemon() {

    this.typePokemon = this.formSelect.value.typePokemon;
    this.getPokemonsStorage();
    this.getPokemosService();

  }


}
