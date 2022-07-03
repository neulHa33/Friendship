import "./styles.css";
import Friends from "./views/friendPage/Friends";
import FriendTab from "./views/friendPage/FriendTab";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Friends />} />
      <Route path="/friendtab" element={<FriendTab />} />
    </Routes>
  );
};

export default App;
