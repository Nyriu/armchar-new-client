import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Advancement } from '../classes/advancement';
import { ArmcharService } from '../armchar/armchar.service';


@Component({
  selector: 'app-advancement-list',
  templateUrl: './advancement-list.component.html',
  styleUrls: ['./advancement-list.component.css']
})
export class AdvancementListComponent implements OnInit {

  advs?: Observable<Advancement[]>;

  constructor(private armcharService: ArmcharService) {
  }

  ngOnInit(): void {
    this.getAdvancements();
  }

  getAdvancements(): void {
    this.advs = this.armcharService.getAdvancements();
    this.advs.subscribe(
      (data) => console.log("look an array!", data)
    );
  }

}
