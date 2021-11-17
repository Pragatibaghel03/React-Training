import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
const root = document.getElementById("root");

/*const styles={
    header:{
        background:"lightblue"

    }

}*/


class App extends React.Component{

    render(){
        return(
            <div>
                <SiteHeader title="Tic Tac Toe" color="green"/>
                <div className="container">
                    <h1>Home Page</h1>
                    <p>Welcome to JSX Application</p>
                </div>
            </div>

        );

    }
}
//const component = React.createElement("h1",null,"Hello World!");
//const component = <h3>Hello JSX World!!</h3>

ReactDOM.render(<App/>,root);