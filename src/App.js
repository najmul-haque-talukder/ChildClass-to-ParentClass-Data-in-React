
import ChildtoPerent from "./DataPassing_PtoC/ChildtoPerent";

function App() {

  let RecieveData = (value) =>{
    console.log(value)
  }


  return (
    <div>
      <h1>Heading</h1>
      <ChildtoPerent onChildData={RecieveData} />
    </div>
  );
}

export default App;
