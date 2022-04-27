import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Advancement } from '../classes/advancement';

@Injectable({
  providedIn: 'root'
})
export class ArmcharService {

  constructor(
    private http: HttpClient
  ) { }


  getAdvancements(): Observable<Advancement[]> {
  //getAdvancements(): Observable<Advancement> {
    //let get_adv = 'http://localhost:3000/adv/cieran';
    let get_adv = '../../assets/adv_cieran.json' // use this static file if server unavailable
    console.log("getAdvancements()");

    this.any_example();
    this.typed_example();

    //return this.http.get<Advancement>(get_adv);
    return this.http.get<Advancement[]>(get_adv); // this line so that it compiles
  }



  // TAKE A LOOK HERE
  //https://www.learnrxjs.io/learn-rxjs/operators/transformation/map

  any_example() {
    console.log("any_example");

    const source:Observable<any> = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);
    let peps:Observable<any> = source.pipe(map(({ name, age }) => { return {name:name+"!", age:age+1}; }));
    // Q1: is peps an array? I don't think so, at list not explicitly
    peps.subscribe(val => console.log(val));
  }

  typed_example() {
    console.log("typed_example");
    
    class Pep {
      name?: string;
      age?: number;
    }

    const source:Observable<any> = from([
    //const source:Observable<any[]> = from([ // NOT POSSIBLE // Q2: why?
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);
    let peps:Observable<Pep> = source.pipe(map(({ name, age }) => { return {name:name+"!", age:age+1}; }));
    // Q3: peps type does not suggest it is an array. What if I wanted to return 
    // Observable<Pep[]>
    // ?
    // Q4: do we need to subscribe and save the values to a not Observable array?

    peps.subscribe(val => console.log(val));
  }



  // just me testing stuff
  tmp_fun() {
    console.log("tmp_fun");

    //const source = from([
    //  { name: 'Joe', age: 30 },
    //  { name: 'Frank', age: 20 },
    //  { name: 'Ryan', age: 50 }
    //]);

    const source: Observable<any> = from(
      [{"advancementcontents":{"arm:atSeason":"Summer","arm:awardsXP":21,"arm:hasAdvancementDescription":"Studies Herbam L6 Q21 +3","arm:hasAdvancementIndex":100,"arm:hasAdvancementType":{"prefixedid":"arm:Reading"},"arm:hasAdvancementTypeString":"Reading","arm:inYear":1217},"advancementid":"<https://hg.schaathun.net/armchar/character/cieran#summer1217adv>","advancementtraits":[{"arm:addedXP":21,"arm:hasLabel":"Herbam","arm:isSpecialTrait":{"prefixedid":"arm:AccelleratedTrait"},"arm:prefixedid":"_:72","arm:traitClass":{"prefixedid":"armr:herbam"}}]},{"advancementcontents":{"arm:atSeason":"Autumn","arm:awardsXP":16,"arm:hasAdvancementDescription":"Studies Mentem L16 Q13 +3","arm:hasAdvancementIndex":100,"arm:hasAdvancementType":{"prefixedid":"arm:Reading"},"arm:hasAdvancementTypeString":"Reading","arm:inYear":1217},"advancementid":"<https://hg.schaathun.net/armchar/character/cieran#autumn1217adv>","advancementtraits":[{"arm:addedXP":16,"arm:hasLabel":"Mentem","arm:isSpecialTrait":{"prefixedid":"arm:AccelleratedTrait"},"arm:prefixedid":"_:73","arm:traitClass":{"prefixedid":"armr:mentem"}}]}]
    );

    /*
    //grab each persons name, could also use pluck for this scenario
    const example:Observable<Advancement> = source.pipe(
      map(
        (data) => {
          console.log("data", data);
          let a = new Advancement();
          a.description = data.advancementcontents['arm:hasAdvancementDescription'];
          a.awardXP = data.advancementcontents['arm:awardsXP'];

          return a;
        }
      ),
      concatMap()
    );
    const subscribe = example.subscribe(val => console.log("subscribe",val));
    */
  }


}
