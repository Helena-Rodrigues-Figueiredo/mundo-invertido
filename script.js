import { subscribeToHellfireClub } from './firebase/hellfire-club.js';

const name = document.getElementById('name');
const email = document.getElementById('email');
const level = document.getElementById('level');
const character = document.getElementById('character');
const btnForm = document.getElementById('btn-form');
const bntSwitchTheme = document.getElementById('switch-theme-button');

bntSwitchTheme.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  const theme = document.body.classList[0];
  const music =
    theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';

  const audio = document.getElementById('music');
  audio.src = `./musics/${music}`;
  audio.play();
  audio.volume = 0.2;
});

btnForm.addEventListener('click', async () => {
  const subscription = {
    name: name.value,
    email: email.value,
    level: level.value,
    character: character.value,
  };

  await subscribeToHellfireClub(subscription);
});
