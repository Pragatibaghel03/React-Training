import React from 'react';
import {SiteTitle} from './site-title';

const component=function(props){

   // console.log('args',props);
    const titleStyle={color: props.color || "black"};

    return (
        <div className="header" >    
            <SiteTitle>{props.title} </SiteTitle>           
        </div>
    );

} ;

export default component;