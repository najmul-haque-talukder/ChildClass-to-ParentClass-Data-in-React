
import ChildtoPerent from "./DataPassing_PtoC/ChildtoPerent";
import ObPassing from "./DataPassing_PtoC/ObPassing";

function App() {

  let RecieveData = (value) =>{
    console.log(value)
  }


  return (
    <div>
      <h1>Heading</h1>
      <ChildtoPerent onChildData={RecieveData} />

      <ObPassing />
    </div>
  );
}

export default App;
