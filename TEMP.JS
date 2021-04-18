
        const player = getRandomPlayer(); 
        const curent= players[`${player}`];
        const $playerLive = document.querySelector(`.player${curent.player} .life`);
        const n = getRandomIntInclusive();
        curent.hp -= n;
        $playerLive.style.width =`${curent.hp}%`;
            if(curent.hp <= 0){
                curent.hp = 0;
                $playerLive.style.width =`${0}%`;
              
      
             }

// http://reactmarathon-api.herokuapp.com/assets/liukang-dizzy.gif
// http://reactmarathon-api.herokuapp.com/assets/liukang-falling.gif
// http://reactmarathon-api.herokuapp.com/assets/scorpion-win.gif
// http://reactmarathon-api.herokuapp.com/assets/kitana-win.gif