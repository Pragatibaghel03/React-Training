

export const checkGame=(cells)=> {

    let result={
        winner:null,   //no winner
        winningCombo:null,
        gameOver: false //game is not over
    };

    const winningCombos= [

                            //horizontal wins
                            [0,1,2],
                            [3,4,5],
                            [6,7,8],

                            //vertical wins
                            [0,3,6],
                            [1,4,7],
                            [2,5,8],

                            //diaglonals wins
                            [0,4,8],
                            [2,4,6]
                    ];

    for(let winningCombo of winningCombos){
        
        let [first,second,third]=winningCombo;
        if(cells[first] && cells[first]===cells[second] && cells[first]===cells[third]){ console.log(cells[first]+'- combo');
            result.winner=cells[first];
            result.winningCombo=winningCombo;
            result.gameOver=true;
            return result;
        }
            
    }

    //no winner yet.

    //how many moves are done?
    let moves= cells.filter( cell=> cell !==null).length;  //filter all cells which are not null

    result.gameOver= moves===9;  //game is over if 9 moves are done.


    return result;
    

}