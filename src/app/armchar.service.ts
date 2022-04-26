import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class TestJson {
  just = "";
  num  = -1;
};

@Injectable({
  providedIn: 'root'
})
export class ArmcharService {

  test_json =   '/assets/test.json';

  //static_charsheetURI =   '/assets/summer1217.json';
  //static_advancementURI = '/assets/adv_cieran.json';
  //
  //charsheetURI = 'http://localhost:8080/armchar/Character/' ;
  //advancementURI = 'http://localhost:8080/armchar/Advancement/' ;


  //a : TestJson;

  constructor(
    private http: HttpClient
  ) { }

  getTestJson() {
    //this.a
    //let a = this.http.get<TestJson>(this.test_json).subscribe(
    /*
    let a = this.http.get(this.test_json).subscribe(
      (raw_tj) => {
        //let tj = new TestJson();
        //tj.just = raw_tj.just;
        //tj.num = raw_tj.num;
        //return tj;
        return raw_tj;
      }
    );
    //console.log(this.a);
    console.log(a);
    */
    console.log("HERE");
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
