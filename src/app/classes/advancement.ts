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

//{
//  "arm:addedXP":21,
//  "arm:hasLabel":"Herbam",
//  "arm:isSpecialTrait":
//    {
//    "prefixedid":"arm:AccelleratedTrait"
//  },
//  "arm:prefixedid":"_:72",
//  "arm:traitClass":
//    {
//    "prefixedid":"armr:herbam"
//  }
//}
class Trait {
  addedXP?: number;
  label?: string;
  isSpecial?: boolean;
  specialInfo?: string; // ad-hoc class in future?
  id?: string;
}



//{
//  "arm:atSeason":"Summer",
//  "arm:awardsXP":21,
//  "arm:hasAdvancementDescription":"Studies Herbam L6 Q21 +3",
//  "arm:hasAdvancementIndex":100,
//  "arm:hasAdvancementType":
//    {
//    "prefixedid":"arm:Reading"
//  },
//  "arm:hasAdvancementTypeString":"Reading",
//  "arm:hasTrait":
//    [
//    {
//      "arm:addedXP":21,
//      "arm:hasLabel":"Herbam",
//      "arm:isSpecialTrait":
//        {
//        "prefixedid":"arm:AccelleratedTrait"
//      },
//      "arm:prefixedid":"_:72",
//      "arm:traitClass":
//        {
//        "prefixedid":"armr:herbam"
//      }
//    }
//  ],
//  "arm:inYear":1217,
//  "id":"<https://hg.schaathun.net/armchar/character/cieran#summer1217adv>"
//}
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

