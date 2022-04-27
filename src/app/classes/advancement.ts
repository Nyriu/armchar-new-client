enum Season {
  Winter,
  Spring,
  Summer,
  Autumn,
}

enum AdvancementType {
  Reading,
}

enum TraitClass {
  Herbam,
}

class Trait {
  addedXP?: number;
  label?: string;
  isSpecial?: boolean;
  specialInfo?: string; // ad-hoc class in future?
  id?: string;
}

export class Advancement {
  year?: number;
  season?: Season;
  awardXP?: number;
  description?: string;
  index?: 100;
  type?: AdvancementType; // maybe adv_type?
  traits?: Trait[];
  id?: string;

  constructor () {}
  //constructor (description: string, year:number) {
  //  this.description = description;
  //  this.year = year;
  //}

  // TODO
  // parse
}

