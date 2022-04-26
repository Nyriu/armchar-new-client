import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Advancement } from '../classes/advancement';
import { ArmcharService } from '../armchar/armchar.service';

@Component({
  selector: 'app-advancement',
  templateUrl: './advancement.component.html',
  styleUrls: ['./advancement.component.css']
})
export class AdvancementComponent implements OnInit {

  @Input() advs?: Observable<Advancement[]>;

  constructor(private armcharService: ArmcharService) {
  }

  ngOnInit(): void {
    this.getAdvancement();
  }

  getAdvancement(): void {
    this.advs = this.armcharService.getAdvancements();
    this.advs.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
