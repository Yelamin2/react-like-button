
import React from 'react';
import './App.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';


function App(){

  //work fro class
  const [count, setCount] = useState(0);
  return(
    <>
    <Button variant ="primary" onClick={() => setCount(count +1)}>{count} {count === 1 ? 'Like' : 'Likes'}</Button>
    </>
  );


  //commented was my original work
  // const LikeButton = () =>{
  //   const [like, setLike] =useState(0),
  //   onLikeButtonClick = () => {
  //     setLike(like +1);
    
  
  //   };
     
  //    return (
  //     <div className = "App">
  //       <Button variant="primary">Success</Button>
  //       <button className="btn btn-primary" onClick={onLikeButtonClick}>{like} {like === 1 ? 'Like': 'Likes'}</button>
  
  //     </div>
  //   );
  // }
  // return LikeButton();
    
  

}



 


// export default function App(){
//   return <LikeButtonComponent/>;
// };

export default App;