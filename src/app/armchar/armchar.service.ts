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
    return this.http.get<any[]>(get_adv).pipe(map(
        (data:any[]) => {
          let advs: Advancement[] = [];
          for (let x of data) {
            let adv = new Advancement();
            adv.parse(x);
            advs.push(adv);
          }
          return advs;
        }));
  }

}
