import React from "react";
import "./index.css";
import { useState } from "react";
import { upload } from "@testing-library/user-event/dist/upload";
import { useRef} from "react";

export default function Index({addPost}) {
  // let [title, setTitle] = useState("");

  // let onChangeHandler =(e)=>{
  //    setTitle(e.target.value);
  // }
  let title = useRef() //Dom note  
  let resetForm = () => {
    // setTitle("");
    title.current.value='';//Dom node
    console.log("update successfully");
  };

  let upload_post = (e) => {
    e.preventDefault(); //prevent refreshing page
    console.log();
  let post = {
      id: Math.floor(Math.random() * 10000),//database ပါရင်ထည့်လို့ရမယ်
      title: title.current.value//Dom node
    };
    resetForm()
    // console.log(post);
    addPost(post)
  };

  return (
    <form className="post-form " onSubmit={upload_post}>
      <h1>Create Post</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        {/* <input type="text" onChange ={ onChangeHandler}></input> */}
        <input
          type="text"
          // onChange={(e) => setTitle(e.target.value)}
           ref = {title}//value ={title}
        />
      </div>

      {/* <p>{title}</p> */}
      {/* <button type="button" onClick={resetForm}>
        reset form
      </button> */}

      <div className="form-control">
        <button type="submit">Post Now</button>
      </div>
    </form>
  );
}
