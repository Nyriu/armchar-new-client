import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Characteristic } from './characteristic';

@Injectable({
  providedIn: 'root'
})
export class ArmcharService {

  //static_charsheetURI =   '/assets/summer1217.json';

  chars_json = '/assets/chars.json';
  char_json  = '/assets/char.json';

  //chars: Characteristic[] = [
  //  {
  //    label : "Intelligence",
  //    id : "INT",
  //    value : +1,
  //  },
  //  {
  //    label : "Perception",
  //    id : "PER",
  //    value : -1,
  //  },
  //];

  chars?: Observable<Characteristic[]>;

  constructor(
    private http: HttpClient
  ) { }

  getCharacteristics(): Observable<Characteristic[]> {
    console.log("getCharacteristics service");
    //let c = this.http.get<Characteristic>(this.char_json);
    /*.pipe(
      (raw_json) => { return {
        label : raw_json.label,
        id    : raw_json.id,
        value : raw_json.value,
      }
      }
    );
    this.chars = [c];
    return this.chars;
    */
    this.chars = this.http.get<Characteristic[]>(this.chars_json);
    return this.chars;

    //this.http.get<Characteristic[]>(this.chars_json);
  }

  /*
    http.get<Character>('/assets/character_in_selected_season.json').subscribe(
      (raw_json) => {this.setCharacter(raw_json)}
    )

    //simulate a changes after some seconds
    //setTimeout(() => {this.setCharacter(new Character("Garret"))}, 2000);
  }

  getCharacter(): Observable<Character> {
    return this.characterSource.asObservable();
  }

  setCharacter(character: Character): void {
    this.characterSource.next(character);
  }
  */

}
