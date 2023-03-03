import { validateCharacter } from "../src/Chatacter";
import { Character } from "../src/types/types";

describe("Test validadeCharacter", () => {
 
  test("Teste 1: Name character null", () => {
    const input: Character = {
        name: "",
        life: 200,
        defense: 1000,
        strength: 150,
      };
    const result = validateCharacter(input);
    expect(result).toBe(false);
  });

  test("Teste 2: Life character zero", () => {
    const input: Character = {
        name: "Byron",
        life: 0,
        defense: 1000,
        strength: 150,
      };
    const result = validateCharacter(input);
    expect(result).toBe(false);
  });

  test("Teste 3: Strength character zero", () => {
    const input: Character = {
        name: "Byron",
        life: 200,
        defense: 1000,
        strength: 0,
      };
    const result = validateCharacter(input);
    expect(result).toBe(false);
  });

  test("Teste 4: Defense character zero", () => {
    const input: Character = {
        name: "Byron",
        life: 200,
        defense: 0,
        strength: 150,
      };
    const result = validateCharacter(input);
    expect(result).toBe(false);
  });

  test("Teste 5: name character null", () => {
    
    const result = validateCharacter({
      name: "Byron",
      life: -300,
      defense: -200,
      strength: -2,
    });
    expect(result).toBe(false);
  });

  test("Teste 6: character true", () => {
    
    const result = validateCharacter({
        name: "Byron",
        life: 300,
        defense:200,
        strength: 2000,
      });
      expect(result).toBe(true);
    });
  
});
