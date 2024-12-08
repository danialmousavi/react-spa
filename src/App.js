import Header from "./Components/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import IndexUsers from "./Pages/uesrs/IndexUsers";
function App() {
  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<IndexUsers/>}/>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
