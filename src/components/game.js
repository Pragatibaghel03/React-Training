import React from 'react';
import Board from './board';
import StatusMessage from './status';
import ResetButton from './rest-button';
import {checkGame} from'../services/winner'
import Timer from './timer';
import PlayerMovesBoard from './playermovesboard';

const columnHeader =["Number","Moves","Position"];

debugger;
class Game extends React.Component {

/*    constructor(props) {
        super(props);
        this.state= this.getInitState();
    }*/

    getInitState=()=>{
        return {
            next: "O",
            cells:[
                null, null, null,
                null, null, null, 
                null, null, null
            ],
            message:"Next Move 'O'",
            moves:0,
            stopWatch:"",
            generateHeader : this.generateHeader.bind(this),
            serialNumber:0,
            clickId:"",
            player:""
          
        };
    }

    componentDidMount(){


    }

    generateHeader(){
      let res=[];
     for(var i =0; i < columnHeader.length; i++){
         res.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
     }
     return res;
   }
    
    handleCellClick=(id)=>{
        console.log("cell",id, "clicked");
        
       
        let cells= [...this.state.cells]; //create a new array with existing values
        
        if(cells[id]!==null)
            return;
        
        cells[id]=this.state.next;
        let result= checkGame(cells);
        let message="";
        let stopWatch="";
       

        /*if (player.includes("X"))
        {
            player="O";
         }
        else
        {
            player="X";
        }*/

        const player= this.state.next;

        const next= this.state.next==="O" ? "X" : "O";
        const moves=this.state.moves+1;
        const serialNumber = this.state.serialNumber+1;
        const clickId=id;

        if(result.winner){
            stopWatch="stop";
           
            message=`${result.winner} Wins`;

   /*                    //==========================
            let indexarr=[0,1,2];
          for(let i of indexarr){
              console.log(cells[i]);
              cells[i]; 
          }
                //==========================*/
            
        } else if(result.gameOver){
            message=`Game ends Stalemate`;
            stopWatch="stop";
        } else{
            message= `Moves: ${moves}, Next: '${next}'`;
            stopWatch="";
        }


        
        this.setState({cells:cells});

        this.setState({next,message,moves,stopWatch,serialNumber,clickId,player});


    }

        constructor(props) {
        super(props);
        this.state= this.getInitState();
    }

/*        handleReset=()=>{
            this.setState(this.getInitState());
        }
*/
    render=()=>{

       const handleReset=()=>{
            this.setState(this.getInitState());
        }
  

        return ( 
            <div className="game">
            <div className="clocks">
             
                <Timer running ={this.state.next==="O"} label ='O' manulaControls ={true} shouldStop={this.state.stopWatch}></Timer>
                <Timer running ={this.state.next==="X"} label ='X' manulaControls ={true} shouldStop={this.state.stopWatch}></Timer>
            </div>

                <StatusMessage message={this.state.message}/>
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} shouldStop={this.state.stopWatch} nextmove={this.state.next}/>
                <ResetButton visible={this.state.moves>0} onReset={this.handleReset} caption="Reset Game"/>
                
                <PlayerMovesBoard cells={this.state.cells} nextmove={this.state.player} headerbody={this.generateHeader()} number={this.state.serialNumber} clickedPosition={this.state.clickId}/>

                    
                
            </div>
           
            );
    }


}



const _Game = (props)=>{


    return (
        <div className="game">
            <StatusMessage/>
            <Board/>
            <button className='reset-button'>Reset</button>
        </div>
        );
};


export default Game;
