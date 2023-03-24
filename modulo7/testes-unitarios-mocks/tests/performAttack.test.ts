import { performAttack } from "../src/Chatacter";
import { Character } from "../src/types/types";

describe("Test performAttack", () => {
  test("Test 1: mock true", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });
    const attacker: Character = {
      name: "Dany",
      life: 10000,
      defense: 10000,
      strength: 1000,
    };
    const defends: Character = {
      name: "Byron",
      life: 1000,
      defense: 800,
      strength: 1000,
    };
    performAttack(attacker, defends, validatorMock);

    expect(defends.defense).toEqual(800);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
  test("Test 2: mock false", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });
    const attacker: Character = {
      name: "Dany",
      life: 10000,
      defense: 10000,
      strength: 1000,
    };
    const defends: Character = {
      name: "",
      life: 1000,
      defense: 800,
      strength: 1000,
    };
    try {
      performAttack(attacker, defends, validatorMock);
    } catch (err:any) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});
