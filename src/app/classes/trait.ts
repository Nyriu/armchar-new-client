export enum TraitClass {
  Herbam,
}

export class Trait {
  addedXP?: number;
  label?: string;
  isSpecial?: boolean;
  specialInfo?: string; // ad-hoc class in future?
  id?: string;
  class?: TraitClass;

  // TODO
  parse(x:any):void {
    if (x['arm:addedXP']) {
      this.addedXP = x['arm:addedXP'];
    }
    if (x['arm:hasLabel']) {
      this.label = x['arm:hasLabel'];
    }
    if (x['arm:traitClass'] && x['arm:traitClass']['prefixedid']) {
      this.class = x['arm:traitClass']['prefixedid']; // TODO convert to enum TraitClass
    }
    this.id = 'TODO parse';
  }
}
