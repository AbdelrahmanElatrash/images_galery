

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/search';


  

function App() {
  const [word, setWord] = useState('');

  const submithandler= function submithandler(e) {
    e.preventDefault() ;
    console.log(word) ;
  }
  //console.log(word);

  return (
    <div >
      <Header title='Images Gallery' />
      <Search word={word} setWord={setWord} submithandler={submithandler}/>
    </div>
  );
}

export default App;
