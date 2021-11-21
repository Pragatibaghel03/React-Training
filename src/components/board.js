import React from 'react';
import Cell from './cell';
//import PlayerMovesBoard from './playermovesboard';



const Board = ({cells,onCellClick,shouldStop,nextmove})=>{
    
        return (
                <div className="board">
                {
                    cells.map((cell,id)=>(<Cell key ={id} id={id} value={cells[id]} shoulddisable={shouldStop} onMove={onCellClick} />))
                
                }
                
                </div>
            );
};


const Board3 = ({cells,onCellClick})=>{

        return (
                <div className="board">
                    <Cell id={0} value={cells[0]} onMove={onCellClick} />
                    <Cell id={1} value={cells[1]} onMove={onCellClick}/>
                    <Cell id={2} value={cells[2]} onMove={onCellClick}/>
                    <Cell id={3} value={cells[3]} onMove={onCellClick}/>
                    <Cell id={4} value={cells[4]} onMove={onCellClick}/>
                    <Cell id={5} value={cells[5]} onMove={onCellClick}/>
                    <Cell id={6} value={cells[6]} onMove={onCellClick}/>
                    <Cell id={7} value={cells[7]} onMove={onCellClick}/>
                    <Cell id={8} value={cells[8]} onMove={onCellClick}/>
                </div>
            );
};




 


  /*  class BoardV2 extends React.Component {

   

        render = ()=>{
    
            return (
                    <div className="board">
                        <Cell id={0} value={this.props.cells[0]} onMove={this.props.onCellClick} />
                        <Cell id={1} value={this.props.cells[1]} onMove={this.props.onCellClick}/>
                        <Cell id={2} value={this.props.cells[2]} onMove={this.props.onCellClick}/>
                        <Cell id={3} value={this.props.cells[3]} onMove={this.props.onCellClick}/>
                        <Cell id={4} value={this.props.cells[4]} onMove={this.props.onCellClick}/>
                        <Cell id={5} value={this.props.cells[5]} onMove={this.props.onCellClick}/>
                        <Cell id={6} value={this.props.cells[6]} onMove={this.props.onCellClick}/>
                        <Cell id={7} value={this.props.cells[7]} onMove={this.props.onCellClick}/>
                        <Cell id={8} value={this.props.cells[8]} onMove={this.props.onCellClick}/>
                    </div>
                );
        }
    
    }
    */
    



const BoardV1 = (props)=>{


    return (
            <div className="board">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </div>
        );
};


export default Board;
