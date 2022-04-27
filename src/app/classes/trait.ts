export enum TraitClass {
  Herbam,
}

export class Trait {
  addedXP?: number;
  label?: string;
  isSpecial?: boolean;
  specialInfo?: string; // ad-hoc class in future?
  id?: string;

  // TODO
  //parse(x:any):void {
  //}
}
