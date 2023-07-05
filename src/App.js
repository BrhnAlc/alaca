import Burhan from "./components/Burhan";
import Deneme from "./components/Deneme";



function App() {
  
  const Can ="can garip";

  const clickFunc = ()=>{
    console.log("sen buttonna tıkladdın");
  }
  
  return (
    <div className="App">
   
  <Burhan Can={Can}/>
  <Deneme/>
  <button onClick={clickFunc}>Tıkla</button>
    </div>
  );
}

export default App;
