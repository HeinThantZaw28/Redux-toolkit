import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Detail from "./components/Detail";
import EditBlog from "./components/EditBlog";
import NewBlog from "./components/NewBlog";

const App = () => {
  const [editBlog, setEditBlog] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route
          path="/edit"
          element={<EditBlog editBlog={editBlog} setEditBlog={setEditBlog} />}
        />
        <Route
          path="/details/:id"
          element={<Detail setEditBlog={setEditBlog} />}
        />
      </Routes>
    </>
  );
};

export default App;
