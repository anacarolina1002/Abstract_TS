import { WorldFactory } from './factories/WorldFactory';
import { MedievalFactory } from './factories/MedievalFactory';
import { FuturisticFactory } from './factories/FuturisticFactory';

function clienteRPG(factory: WorldFactory) {
  const weapon = factory.createWeapon();
  const armor = factory.createArmor();

  console.log(`Arma: ${weapon.getName()}`);
  console.log(`Armadura: ${armor.getName()}`);
}

// Escolhendo o mundo medieval
const medievalFactory = new MedievalFactory();
console.log("Mundo Medieval:");
clienteRPG(medievalFactory);

// Escolhendo o mundo futurista
const futuristicFactory = new FuturisticFactory();
console.log("\nMundo Futurista:");
clienteRPG(futuristicFactory);
