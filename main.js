
'use strict';
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
class Players{
    constructor(name,hp,src,weapon,player){
this.name = name;
this.player=player;
this.hp = hp;
this.weapon = weapon;
this.img = src;
}; 
    attack(){
        console.log('atack  '+this.name+'  atack');
    }
};
const pl1 = new Players('zomby',100,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',['pistol','automat'],1);
const pl2 = new Players('valentyn',100,'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',['pistol','automat'],2);

const createElement = (tag,className ) => {
const $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }
    return $tag;
}
const getRandomIntInclusive = () => {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1; //Максимум и минимум включаются
  }
  const getRandomPlayer = () => {
    const result= Math.floor(Math.random() * (10 - 1 + 1)) + 1; //Максимум и минимум включаются
    if(result % 2 > 0){
        return 1;
    }else{
        return 0 ;
    }
  }
const createPlayer=({name, hp, img, player}) => {
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
const playerLose = (name) => {
    const $loseTitle = createElement('div','loseTitle');
    $loseTitle.textContent =`lose ${name}`;
    return $loseTitle; 
    };
    const playerWin = (name) => {
        const $WinTitle = createElement('div','winTitle');
        $WinTitle.textContent =`win ${name}`;
        return $WinTitle; 
        };

const chaNgeHp = (players) => {
    if(players[0].hp > 0 && players[1].hp > 0 ){
        const player = getRandomPlayer(); 
        const curent= players[`${player}`];
        const $playerLive = document.querySelector(`.player${curent.player} .life`);
        const n = getRandomIntInclusive();
        curent.hp -= n;
        $playerLive.style.width =`${curent.hp}%`;
        if(curent.hp <= 0){
            curent.hp -= 0;
            $playerLive.style.width =`${0}%`;
            let result = players.find(function(item) {
                if(curent.name !== item.name){
                    return true;
                }
              });
            $arenas.appendChild(playerLose(curent.name));
            $arenas.appendChild(playerWin(result.name));
        }

    }else{
        return;
    }
 


};

$arenas.appendChild(createPlayer( pl1));
$arenas.appendChild(createPlayer( pl2));
const arrPl = [pl1,pl2];
$randomButton.addEventListener('click', ()=>{
   
    chaNgeHp(arrPl);

})