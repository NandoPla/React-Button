// Tela do site (onde crio a parte visual)

import Button from "./components/Button";

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
  return (
    <div className="App" style={bodyStyle}>
      <p style={titleStyle}>0</p>

     <Button name="Add Count" />
     <Button name="Remove Count" />
     <Button name="Open"/>
    
    </div>
  );
}


export default App;
