import { WorldFactory } from './WorldFactory';
import { Weapon } from '../items/Weapon';
import { Armor } from '../items/Armor';
import { MedievalWeapon } from '../medieval/MedievalWeapon';
import { MedievalArmor } from '../medieval/MedievalArmor';

export class MedievalFactory implements WorldFactory {
  createWeapon(): Weapon {
    return new MedievalWeapon();
  }

  createArmor(): Armor {
    return new MedievalArmor();
  }
}
