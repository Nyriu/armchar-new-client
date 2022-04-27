import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Advancement } from '../classes/advancement';

@Injectable({
  providedIn: 'root'
})
export class ArmcharService {

  constructor(
    private http: HttpClient
  ) { }


  getAdvancements(): Observable<Advancement[]> {
    //let get_adv = 'http://localhost:3000/adv/cieran';
    let get_adv = '../../assets/adv_cieran.json' // use this static file if server unavailable

    //console.log("getAdvancements()");

    //return this.http.get(get_adv);
    return this.http.get<any[]>(get_adv).pipe(
      map( // each element is an array
        (d:any[]) => {
          // convert arrays of json fields into actaul Advancement[]
          let advs: Advancement[] = [];
          for (let x of d) {
            let adv = new Advancement();

            // ugly thing
            if (x['advancementcontents'] && x['advancementcontents']['arm:hasAdvancementDescription']) {
              adv.description = x['advancementcontents']['arm:hasAdvancementDescription'];
            }
            if (x['advancementcontents'] && x['advancementcontents']['arm:inYear']) {
              //adv.year = x['advancementcontents']['arm:inYear'];
            }
            // add other fields
            // refactor
            advs.push(adv);
          }
          return advs;
        }
      )
    );
  }

}
