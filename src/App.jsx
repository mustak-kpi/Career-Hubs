import Header from "./components/Header";
import { Outlet} from "react-router-dom";
import Futter from "./components/Futter/Futter";





function App() {

   return (

       <>
         <Header></Header>
        <Outlet></Outlet>
        <Futter></Futter>
       </>

  );
}

export default App;
