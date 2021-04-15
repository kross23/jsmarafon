'use strict';
const $arenas = document.querySelector('.arenas');
const $form = document.querySelector('.control');
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
     changeHP(n) {
         if(this.hp - n <= 0){
            this.hp=0;
            return 0;
         }else{
            this.hp -= n;
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
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const pl1 = new Players('zomby',100,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',['pistol','automat'],1);
const pl2 = new Players('valentyn',100,'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',['pistol','automat'],2);

const createElement = (tag,className ) => {
const $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }
    return $tag;
}
const enemyAttack = () => {
    let hit,defence;
    switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
        case 1:
           hit =  'head';
            break;
        case 2:
            hit =  'body';
            break;
        case 3 :
            hit =  'foot';
        default:
            break;
    }
    switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
        case 1:
            defence =  'head';
            break;
        case 2:
            defence =  'body';
            break;
        case 3 :
            defence =  'foot';
        default:
            break;
    }

return{
    'defence':defence,
    'hit':hit,
   'value':HIT[hit],
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

function playerWin(name='drawe'){
    const $WinTitle = createElement('div','winTitle');
        $WinTitle.textContent =`win ${name}`;
    $arenas.appendChild($WinTitle);
};
function createReloadButton(){
const $reloadButtonDiv = createElement('div','reloadWrap');
const $reloadButton = createElement('button','button');
$reloadButton.innerText = 'reload';
$reloadButton.addEventListener('click',() => {
    $form[6].disabled = false;
    pl1.hp = 100;
    pl2.hp = 100;
    pl1.renderHP();
    pl2.renderHP();
    
    const $WinTitle = document.querySelector('.winTitle');
    $arenas.removeChild($WinTitle);
    $arenas.removeChild($reloadButtonDiv);
});
$reloadButtonDiv.appendChild($reloadButton);
$arenas.appendChild($reloadButtonDiv);
}

function action(hit,def,pl1,pl2){
    if(!def.defence[hit.hit]){
        pl1.changeHP(hit.value);
        pl1.elHP();
        pl1.renderHP();
    }
    if(!def.hit[hit.defence]){
        const key = Object.keys(def.hit).find(key => def.hit[key] === true);
        pl2.changeHP(HIT[key]);
        pl2.elHP();
        pl2.renderHP();
    }
    if(pl1.hp === 0 || pl2.hp === 0 ){
        console.log('стоп игра');
        $form[6].disabled = true;
    console.log('pl1',pl1.hp,'pl2',pl2.hp);
            if(pl1.hp === 0){
                playerWin(pl2.name);
            }else if(pl2.hp === 0){
                playerWin(pl1.name);
            }else{
                playerWin();
             
            }
            createReloadButton();
    }
}
$arenas.appendChild(createPlayer( pl1));
$arenas.appendChild(createPlayer( pl2));

$form.addEventListener('submit', (e)=>{
e.preventDefault();
const obj={
    hit:{},
    defence:{},
};
   for (let value of  $form){
       const item = value;
        if(value.name === 'hit' ){
         obj.hit[item.value] = item.checked;
         
         }else if(value.name === 'defence')
         {     
           obj.defence[item.value] = item.checked; 
         }
         item.checked=false;
    };
action(enemyAttack(), obj, pl1, pl2);
});


