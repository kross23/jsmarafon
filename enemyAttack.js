export const enemyAttack = () => {
    const enemy={
        'hit':'',
        'defence':{}
    
    }
    switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
        case 1:
            enemy.hit =  'head';
            break;
        case 2:
            enemy.hit =  'body';
            break;
        case 3 :
            enemy.hit =  'foot';
        default:
            break;
    }
    switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
        case 1:
            enemy.defence = {'head' :  true};
            break;
        case 2:
            enemy.defence = {'body' :  true};
            break;
        case 3 :
            enemy.defence = {'foot' :  true};
        default:
            break;
    }
return enemy;
  };