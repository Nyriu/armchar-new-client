import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Advancement } from '../classes/advancement';
import { ArmcharService } from '../armchar/armchar.service';

@Component({
  selector: 'app-pregame-advancement-list',
  templateUrl: './pregame-advancement-list.component.html',
  styleUrls: ['./pregame-advancement-list.component.css']
})
export class PregameAdvancementListComponent implements OnInit {

  advs?: Observable<Advancement[]>;

  constructor(private armcharService: ArmcharService) {
  }

  ngOnInit(): void {
    this.getPregameAdvancements();
  }

  getPregameAdvancements(): void {
    this.advs = this.armcharService.getPregameAdvancements();
    this.advs.subscribe(
      (data) => console.log("look an array!", data)
    );
  }


}
