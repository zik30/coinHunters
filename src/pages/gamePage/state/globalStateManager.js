export const statePropsEnum = {
  playerHp: "playerHp",
  isDoubleJumpUnlocked: "isDoubleJumpUnlocked",
  playerInBossFight: "playerInBossFight",
  isBossDefeated: "isBossDefeated",
  coin: "coin",
  pause: "pause",
};

function initStateManager() {
  const state = {
    playerHp: 3,
    maxPlayerHp: 3,
    isDoubleJumpUnlocked: false,
    playerInBossFight: false,
    isBossDefeated: false,
    coin: 0,
    pause: false
  };

  return {
    current() {
      return { ...state };
    },
    set(property, value) {
      state[property] = value;
    },
  };
}

export const state = initStateManager();
