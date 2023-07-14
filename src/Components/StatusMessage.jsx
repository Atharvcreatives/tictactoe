import React from "react";

const StatusMessage=({winner,isXNext,squares}) => {
  const noMovesLeft=squares.every(squareValue => squareValue !== null);    
     const nextPlayer= isXNext ? 'X':'O';
 
     const renderStatusMessage = () =>
     {
         if(winner){
             return(
             <React.Fragment>
              Winner is {' '}
             <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner} </span>
             </React.Fragment>
             );
         }
         if(!winner && noMovesLeft){
             return ( <React.Fragment>There is a tie between 
              <span className="text-orange">O</span> and {' '} <span className="text-green">X</span></React.Fragment>
             );
         }
         if(!winner && !noMovesLeft){
             return (<React.Fragment>Next player is <span className= {isXNext ? 'text-green' : 'text-orange'}>
              {nextPlayer}
              </span></React.Fragment>
             );
         };
 
         return null;
 
         };
 
         return <h2 className="status-message">{renderStatusMessage()}</h2>
 };
 export default StatusMessage;