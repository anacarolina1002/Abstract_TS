import { Weapon } from '../items/Weapon';
import { Armor } from '../items/Armor';

export interface WorldFactory {
  createWeapon(): Weapon;
  createArmor(): Armor;
}
