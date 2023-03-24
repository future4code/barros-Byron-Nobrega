import { Character } from "./types/types";

export const validateCharacter = (input: Character) => {
  const { name, life, defense, strength } = input;
  if (!name || !life || !strength || !strength) {
    return false;
  }

  if (life <= 0 || defense <= 0 || strength <= 0) {
    return false;
  }
  return true;
};

export const performAttacks = (attacker:Character , defends:Character) => {
    
    const attac = validateCharacter(attacker);
    const defend = validateCharacter(defends);
    if(!attac || !defend){
       throw new Error("Invalid Character");
    }
    if(attacker.strength > defends.defense){
        const combat = (defends.defense - attacker.strength)
        defends.life = combat
    }
}
export const performAttack = (attacker:Character , defends:Character, validator:(input:Character)=> boolean) => {
    const attac = validator(attacker);
    const defend = validator(defends);
    if(!attac || !defend){
       throw new Error("Invalid Character");
    }
    if(attacker.strength > defends.defense){
      defends.life -= (attacker.strength - defends.defense)
    }
}

/*C) a diferença é que com a inversão de dependências a execução da função validateCharacter 
fica no teste retirando a dependência da função performAttack tinha. */

/* EX4.a)devemos fazer o mock da validateCharacter assim podemos retiramos a dependência existente da função performAttack
 */


