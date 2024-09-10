import { Weapon } from '../items/Weapon';

export class MedievalWeapon implements Weapon {
  getName(): string {
    return 'Espada Longa';
  }
}
