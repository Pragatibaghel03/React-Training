import React from 'react';
//import employ from './employ.json';
const columnHeader =["Number","Moves","Position"];
let res=[];

export default class ChildComponent extends React.Component{
   constructor(props){
       super(props);
       this.state={
       }

        //console.log("clickId - "+this.props.clickedPosition)

        if (this.props.number===0) {let hideproperty=true;
        }else hideproperty=false;
       //this.generateHeader = this.generateHeader.bind(this);
       
            this.generateTableData = this.generateTableData.bind(this);
   
       console.log(this.state.hideproperty+"hide property");

   }
   


   generateTableData(){
       this.props.nextmove

           res.push(
            <tr >
           <td>{this.props.number}</td>
           <td>{this.props.nextmove}</td>
           <td>{this.props.clickedPosition}</td>
           </tr>
           )
       //res= res.slice(0);
       return res;
   }
   render(){
       return(
           <div>
        <table>
        <thead>
            <tr>
            {this.props.headerbody}
            </tr>
        </thead>{this.state.hideproperty ? "":
        <tbody>
            {this.generateTableData().slice(1)}
        </tbody>}
        </table>
           </div>
       )

   }
}
