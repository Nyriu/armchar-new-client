import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Advancement } from '../classes/advancement';

@Component({
  selector: 'app-advancement',
  templateUrl: './advancement.component.html',
  styleUrls: ['./advancement.component.css']
})
export class AdvancementComponent implements OnInit {

  //@Input() adv?: Observable<Advancement>;
  @Input() adv?: Advancement;

  constructor() {
  }

  ngOnInit(): void {
  }

}
