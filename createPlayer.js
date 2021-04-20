import {createElement} from './createElement.js';
export const createPlayer=({name, hp, img, player}) => {
    const $player = createElement('div',`player${player}` );
    const $ilemProgrBar = createElement('div','progressbar' )
    const $life = createElement('div','life'); // 2
    const $name = createElement('div','name');//2
    const $character = createElement('div','character');
    $character.innerHTML=`<img src=${img} />`;
    $name.textContent= name;
    $life.style.width = `${hp}%`;

    $ilemProgrBar.appendChild($life);
    $ilemProgrBar.appendChild($name);
    $player.appendChild($ilemProgrBar);
    $player.appendChild($character);
    return $player;
};