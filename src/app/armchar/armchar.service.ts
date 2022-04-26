import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Advancement } from '../classes/advancement';

@Injectable({
  providedIn: 'root'
})
export class ArmcharService {

  constructor(
    private http: HttpClient
  ) { }


  getAdvancements(): Observable<Advancement[]> {
  //getAdvancements(): Advancement[] {
    let get_adv = 'http://localhost:3000/adv/cieran';
    return this.http.get<Advancement[]>(get_adv);
    //return [
    //  {
    //    year : 1217,
    //    //season?: Season;
    //    //awardXP?: number;
    //    description: "test description",
    //    //index?: 100;
    //    //type?: AdvancementType; // maybe adv_type?
    //    //traits?: Trait[];
    //    //id?: string;

    //  }
    //];
  }
}
