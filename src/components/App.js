
import React from 'react';
import './App.css';
import {useState} from 'react';


function App(){

  const LikeButtonComponent = () =>{
    const [like, setLike] =useState(0),
    onLikeButtonClick = () => {
      setLike(like +1);
    
  
    };
     
     return (
      <div className = "App">
        <button onClick={onLikeButtonClick}>{like} {like === 1 ? 'Like': 'Likes'}</button>
  
      </div>
    );
  }
  return LikeButtonComponent();
    
  

}



 


// export default function App(){
//   return <LikeButtonComponent/>;
// };

export default App;