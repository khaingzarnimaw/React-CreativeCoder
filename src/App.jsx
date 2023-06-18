import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostsList/index";
import Modal from "./components/Modal/index";
import './App.css'
import PostForm from "./components/PostForm";

const App = () => {
  let [showModal, setshowModal] = useState(false);
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First post",
    },
    {
      id: 2,
      title: "Second post",
    },
    {
      id: 3,
      title: "Third post",
    },
  ]);
  return (
    <>
      {/* < Navbar/> ထဲမှာ setShowModal={setshowModal} ကိုထဲ့လိုက်တာfunction တွေကိုpropsအနေနဲ့ ပို့ချင်လို့ */}
      <Navbar setShowModal={setshowModal} />

      <PostsList posts={posts} />
      {/* <Modal>
      <h1>Zoom class is available now.</h1>
       <p>feel free to <a href=''>join</a> here</p>
     </Modal> */}
      {showModal && 
         
        // <Modal danger = {false}>
        <Modal setshowModal={setshowModal}>
          {/* <h1>Terms and Conditions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            veritatis voluptas est. Cumque error temporibus repellat, deserunt,
            quisquam eligendi quasi, quibusdam porro officiis minima sapiente
            voluptate distinctio possimus facere suscipit?
          </p> */}
          <PostForm/>
          
        </Modal>
      }
    </>
  );
};

export default App;
