import React from 'react';
import './app.css';
import SiteHeader from './components/site-header';
import Game from './components/game';


export default class App extends React.Component{

    
    render(){
        return (
            <div className="app">
                <SiteHeader title="Tic Tac Toe" color="purple" size={20} />
        
                <div className="container">
                   <Game/>
                   
                </div>
            </div>
        
        );
    }
}