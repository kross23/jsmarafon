import { HIT} from './logs.js';
import Players from './player.js';
import {enemyAttack} from './enemyAttack.js';
import {playerAtack } from './playerAtack.js';
import {generateLogs} from './generateLogs.js';
import {createPlayer} from './createPlayer.js';
import {createElement} from './createElement.js';
import {createReloadButton} from './createReloadButton.js';

class Game {
    constructor(
     
    ){
        this.$arenas = document.querySelector('.arenas');
        this.$form = document.querySelector('.control');
        this.pl1 = new Players('chelovek',100,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',['pistol','automat'],1);
        this.pl2 = new Players('valentyn',100,'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',['pistol','automat'],2);
       
    };

    
   



playerWin(name='drawe'){
    const $WinTitle = createElement('div','winTitle');
        $WinTitle.textContent =`win ${name}`;
        this.$arenas.appendChild($WinTitle);
};


action(hit,def,pl1,pl2){
if (pl1.hp === 100 && pl1.hp === 100){
    generateLogs('start', pl2, pl1);
}

    if(!def.defence[hit.hit]){
        pl1.changeHP(HIT[hit.hit]);
        pl1.elHP();
        pl1.renderHP();
        generateLogs('hit', pl1, pl2);
    }else if(def.defence[hit.hit]){
        generateLogs('defence', pl2, pl1);
    }

    if(!hit.defence[def.hit]){
        pl2.changeHP(HIT[def.hit]);
        pl2.elHP();
        pl2.renderHP();
        generateLogs('hit', pl2, pl1);
    }else if(hit.defence[def.hit]){
        generateLogs('defence', pl1, pl1);
    }

    if(pl1.hp === 0 || pl2.hp === 0 ){
        console.log('стоп игра');
        this.$form[6].disabled = true;
            if(pl1.hp === 0){
                this.playerWin(pl2.name);
                generateLogs('end', pl2, pl1);
            }else if(pl2.hp === 0){
                this.playerWin(pl1.name);
                generateLogs('end', pl1, pl2);
            }else{
                this.playerWin();
                generateLogs();
            }
            createReloadButton(pl1, pl2);
    }
}

start(){
    this.$arenas.appendChild(createPlayer( this.pl1));
    this.$arenas.appendChild(createPlayer( this.pl2));
    this.$form.addEventListener('submit', (e)=>{
        e.preventDefault();
    
        this.action(enemyAttack(), playerAtack(), this.pl1, this.pl2);
        });
}

};
export default Game;