import React from "react";
import "./components/counterapp.css"; 

const DeltaButton = (props) => {
  console.log(props.value);
    let label = "" + props.value;
    if (props.delta > 0) label += " + ";
   
    //label += " " + props.delta;
   
    label = (props.delta)
    //console.log(label)
    if (label>0)  label="+"+label;
    if (label<0)  label=label;
    

    const handleChange = () => {
        props.onChange(props.value + props.delta);
    };

    return (
        <button onClick={handleChange} className="delta-button">
            {label}
            
        </button>
    );
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

        //this.change=this.change.bind(this);
    }

    change= (newValue) => {
        this.setState({ value: newValue });
    };
    
    render() {
        return (
            <div className="App">
                <DeltaButton onChange={(newValue)=>this.change(newValue)} value={this.state.value} delta={1} />

                <DeltaButton onChange={this.change} value={this.state.value} delta={10} />
                <DeltaButton onChange={this.change} value={this.state.value} delta={-1} />

                <DeltaButton onChange={this.change} value={this.state.value} delta={-10} />
                <br/>
                <button className="result">{this.state.value}</button>
            </div>
        );
    }
}