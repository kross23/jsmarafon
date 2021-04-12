
'use strict';
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
class Players{
    elementLife ='';
    constructor(name,hp,src,weapon,player){
this.name = name;
this.player=player;
this.hp = hp;
this.weapon = weapon;
this.img = src;
}; 
    attack(){
        console.log('atack  '+this.name+'  atack');
    };
     changeHP(N) {
         if(this.hp - N <= 0){
            this.hp=0;
            return 0;
         }else{
            this.hp -= N;
            return this.hp;
         }
    };
    elHP ()  {
         this.elementLife = document.querySelector(`.player${this.player} .life`);
         
    }
     renderHP(){
        this.elementLife.style.width =`${this.hp}%`;
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

const playerWin = (name='drawe') => {
    const $WinTitle = createElement('div','winTitle');
        $WinTitle.textContent =`win ${name}`;
    return $WinTitle; 
};
$arenas.appendChild(createPlayer( pl1));
$arenas.appendChild(createPlayer( pl2));
const arrPl = [pl1,pl2];


$randomButton.addEventListener('click', ()=>{
const temp = getRandomPlayer();
  
    arrPl[temp].changeHP(getRandomIntInclusive());
    arrPl[temp].elHP();
    arrPl[temp].renderHP();
    $randomButton.disabled = !arrPl[temp].hp;
    console.log('$randomButton.disabled: ', $randomButton.disabled);
});
