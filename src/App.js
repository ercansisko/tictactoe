import React,{ useEffect, useState} from 'react';
import './App.css';

function App() {
  const answer_keys=[[0,1,2,0],
  [3,4,5,1],
  [6,7,8,2],
  [0,3,6,3],
  [1,4,7,4],
  [2,5,8,5],
  [0,4,8,6],
  [2,4,6,7]];
  const [gameArr, setGameArr]=useState(['','','','','','','','','']);
  const [winner,setWinner]=useState('');
  const [raund,setRaund]=useState(0);
  const [wonSet, setWonSet]=useState([]);
    const handleClick=(e)=>{
      setGameArr((prev)=>{
        let sign;
        raund%2==0?sign='X':sign='O';
        prev[e.target.id]=sign;
        return [...prev];
      })
      setRaund(prev=>prev+1);
      }
    useEffect(()=>{
    },[wonSet]);

   useEffect(()=>{
    for(let answerkey of answer_keys)
    {
      if(gameArr[answerkey[0]]=='X'&&gameArr[answerkey[1]]=='X'&&gameArr[answerkey[2]]=='X')
     { console.log('X kazandı');
     setWinner('X');
     setWonSet(answerkey);
     document.querySelector('.winner').style.visibility='visible';
     for (let griditem of document.querySelectorAll('.grid-item'))
     griditem.classList.add('disabled');
      }
      if(gameArr[answerkey[0]]=='O'&&gameArr[answerkey[1]]=='O'&&gameArr[answerkey[2]]=='O')
     { console.log('O kazandı');
     setWinner('O');
     setWonSet(answerkey);
     document.querySelector('.winner').style.visibility='visible';
     for (let griditem of document.querySelectorAll('.grid-item'))
     griditem.classList.add('disabled');
      }
    }
    if(raund>=9)
    {
      for (let griditem of document.querySelectorAll('.grid-item'))
      griditem.classList.add('disabled');
    }
   },[raund]);
 
  
  return (
    <div className="App">
      <h4 className='title'>Tic Tac Toe</h4>
      <div className="border-color">
        <div className="grid-container">
         {gameArr.map((singleContent,index)=>(
          <div key={index} id={index} onClick={handleClick} className='grid-item'>{singleContent}</div>
         ))} 
        </div>
        <hr className={`winStick${wonSet[3]}`} />
      </div>
      <div className="winner">{winner} Kazandı</div>
      <button onClick={()=>{window.location.reload();
      return false}}>Tekrar Oyna</button>
    </div>  
  );   
}  
     
export default App;  


