import { Routes, Route } from "react-router-dom";
import IndexUsers from "./IndexUsers";
import ShowUsers from "./Show"
const RouterUser = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexUsers />} />
      <Route path="/:Id" element={<ShowUsers/>} />
    </Routes>
  );
};
export default RouterUser;
