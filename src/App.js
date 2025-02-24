import Header from "./Components/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import RouterUser from "./Pages/uesrs/Router";
import RouterPosts from "./Pages/posts/Router";
function App() {
  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/*" element={<RouterUser/>}/>
        <Route path="/posts/*" element={<RouterPosts/>}/>

      </Routes>
    </BrowserRouter>
   </>
  );
}
export default App;
