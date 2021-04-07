
'use strict';
class oBject{
    constructor(name,hp,src,weapon){
this.name = name;
this.hp = hp;
this.weapon = weapon;
this.img = src;
}; 
    attack(){
        console.log('atack  '+this.name+'  atack');
    }
};
const pl1 = new oBject('zomby',20,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',['pistol','automat']);
const pl2 = new oBject('valentyn',20,'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',['pistol','automat']);

const arenas = document.querySelector('.arenas');

const createPlayer=(plaers='player1',{name, hp, img}) => {
    const $player = document.createElement('div');//0
    $player.classList.add(plaers);
    const $ilemProgrBar = document.createElement('div');//1
    $ilemProgrBar.classList.add('progressbar');
    const $life = document.createElement('div'); // 2
    $life.classList.add('life');
    $life.style.width = `${hp}%`;
    const $name = document.createElement('div');//2
    $name.classList.add('name');
    $name.textContent= name;
    $ilemProgrBar.appendChild($life);
    $ilemProgrBar.appendChild($name);
    const $character = document.createElement('div');
    $character.classList.add('character');
    $character.innerHTML=`<img src=${img} />`;
    $player.appendChild($ilemProgrBar);
    $player.appendChild($character);
    return $player;
};

const play1 = createPlayer('player1', pl1);
const play2= createPlayer('player2', pl2);
arenas.appendChild(play1);
arenas.appendChild(play2);
