import { Routes, Route } from "react-router-dom";
import IndexPosts from "./IndexPosts";
import ShowPosts from "./Show";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
const RouterPosts = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPosts/>} />
      <Route path="/create" element={<CreatePost/>} />
      <Route path="/edit/:Id" element={<EditPost/>} />
      <Route path="/:Id" element={<ShowPosts/>} />


    </Routes>
  );
};
export default RouterPosts;
