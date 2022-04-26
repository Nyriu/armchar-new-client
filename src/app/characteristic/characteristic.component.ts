import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Characteristic } from '../characteristic';
import { ArmcharService } from '../armchar.service';

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.css']
})
export class CharacteristicComponent implements OnInit {

  chars?: Observable<Characteristic[]>;
  //chars?: Characteristic[];
  selectedChar?: Characteristic;


  constructor(private armcharService: ArmcharService) { }

  ngOnInit(): void {
    this.getCharacteristics();
  }

  getCharacteristics(): void {
    console.log("getCharacteristics component");
    this.armcharService.getCharacteristics();

    this.chars = this.armcharService.getCharacteristics();
    //this.chars = [ { label : "Intelligence", id : "INT", value : +1, }];
  }

  onSelect(c: Characteristic): void {
    this.selectedChar = c;
  };

}
