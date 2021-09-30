// Tela do site (onde crio a parte visual)

import Button from "./components/Button";
import {useState} from "react"

const bodyStyle = {
  backgroundColor: "#00c5dd",
  height:"100%",
  textAlign:"center"
}

const titleStyle = {
  color:"white",
  fontSize: "2em"
}

function App() { 
  
  //useState (count) é o valor de inicio
  //setCount atualiza o count
  //

  const [count, setCount] = useState(0) // eh o atualizas

  function addCount() {

    setCount(count+1)

  }

  return (
    <div className="App" style={bodyStyle}>
      <p style={titleStyle}>{count}</p>

     <Button onClick = {addCount} name="Add Count" />
     <Button name="Remove Count" />
     <Button name="Open"/>
    
    </div>
  );
}


export default App;
