const app = "I don't do much.";
const addInitialsToHeroes = heroes => heroes.map(hero => Object.assign({}, hero, {
  initials: hero.firstName.charAt(0) + hero.lastName.charAt(0),
}));

//to make sure we don't modify original array
