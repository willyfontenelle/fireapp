import { useState } from 'react';
import { db } from './firebaseConnection';
import  { doc, setDoc } from 'firebase/firestore';

import './app.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  async function handleAdd(){
    await setDoc(doc(db, "posts", "12345"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("DADOS REGISTRADO NO BANCO!")
    })
    .catch((error) => {
      console.log("GEROU ERRO" + error)
    })
  }

  
  
  return (
    <div>
      <h1>ReactJS + Firebase :)</h1>

    <div className="container">
      <label>Titulo:</label>
      <textarea
        type="text"
        placeholder='Digite o titulo'
        value={titulo}
        onChange={ (e) => setTitulo(e.target.value)}
      />

    <label>Autor:</label>
    <input
      type="text"
      placeholder="Autor do post"
      value={autor}
      onChange={ (e) => setAutor(e.target.value)}
    />

    <button onClick={handleAdd}>Cadastrar</button>
    </div>
    </div>
  );
}

export default App;
