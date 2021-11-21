

const ResetButton = ({visible,caption,onReset})=>{
    let visibleBtn=""
    //console.log(visible + ' visible');
    //<button style={style} onClick={onReset}  className="reset-button">{caption||"Reset"}</button>;


    if(visible)
        return <button onClick={onReset}  className="reset-button">{caption||"Reset"}</button>;
    else
        return null; 

}

export default ResetButton;