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
    let get_adv = 'http://localhost:3000/adv/cieran';
    //let get_adv = '../../assets/adv_cieran.json' // use this static file if server unavailable

    //console.log("getAdvancements()");

    //return this.http.get(get_adv);
    return this.http.get<any[]>(get_adv).pipe(
      map( // each element is an array
        (d:any[]) => {
          // convert arrays of json fields into actaul Advancement[]
          let advs: Advancement[] = [];
          for (let x of d) {
            let adv = new Advancement();

            // ugly thing // refactor
            if (x['advancementcontents']) {
              let xac = x['advancementcontents'];
              let fields = {
                'season'      : 'arm:atSeason',
                'awardXP'     : 'arm:awardsXP',
                'description' : 'arm:hasAdvancementDescription',
                'index'       : 'arm:hasAdvancementIndex',
                //             ['advtype']['prefixedid']
                'type'        :'arm:hasAdvancementTypeString',
                'year'        :'arm:inYear',
              }
              //Object.keys(fields).forEach( // this doesn't work, maybe async stuff?
              //  (l,r) => {
              //    console.log(l,r);
              //    if (xac[r])
              //      (adv as any)[l] = xac[r];
              //  }
              //);
              for (let l of Object.keys(fields)) {
                let r = (fields as any)[l];
                //console.log(l,r);
                if (xac[r])
                  (adv as any)[l] = xac[r];
              }
            }
            //advancementid
            if (x['advancementid'] && x['advancementid']['prefixedid']) {
              adv.id = x['advancementid']['prefixedid'];
            }
            // TODO
            //advancementtraits
            //if (x['advancementtraits']) {
            //  adv.traits = [
            //  ]
            //}

            advs.push(adv as Advancement);
          }
          return advs;
        }
      )
    );
  }

}
