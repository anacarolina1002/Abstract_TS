import { WorldFactory } from './WorldFactory';
import { Weapon } from '../items/Weapon';
import { Armor } from '../items/Armor';
import { FuturisticWeapon } from '../futuristic/FuturisticWeapon';
import { FuturisticArmor } from '../futuristic/FuturisticArmor';

export class FuturisticFactory implements WorldFactory {
  createWeapon(): Weapon {
    return new FuturisticWeapon();
  }

  createArmor(): Armor {
    return new FuturisticArmor();
  }
}
