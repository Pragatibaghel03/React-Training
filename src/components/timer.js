import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={

            ms:0
        }

    }

 componentDidMount(){
     if(this.props.running)
        this.start();

    }

componentDidUpdate=(prevProp)=>{ console.log("shouldstop-"+this.props.shouldStop)
    if(this.props.shouldStop==='stop')
        this.stop();
    if(prevProp.running!==this.props.running){
        if(this.props.running)
            this.start();
              else
            this.stop();

    }

}



    start=()=>{
        if (!this.id)
            this. id = setInterval(()=>{
                //if(this.props.running){   
                    const ms = this.state.ms+100;
                    this.setState({ms});
              // }

        },100)

}

    stop=()=>{


        if(this.id){

            clearInterval(this.id);
            this.id=null;
        }
    }

componentDidUnmount=()=>{
    this.stop();

}

  render(){

     let seconds=Math.floor(this.state.ms/1000);
      const ms = this.state.ms - seconds*1000;
      const hms = Math.floor(ms/100);

      if (seconds<10)
        seconds="0"+seconds;

    return (<div className='time'>
        <p>{this.props.label}</p>
        <p>{seconds}:{ms}</p>
        {this.props.manulaControls  && 
             <div> <button onClick={this.start}>Start</button>
                   <button onClick={this.stop}>Stop</button>
            </div>
         }
      </div>)

  }
}

export default Timer;
