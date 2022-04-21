import style from "./content.module.css";
import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";

function Content() {
  return (
    <div className={style.content}>
      <div className={style.wrapper}>
        <Share />
        <Post />
      </div>
    </div>
  );
}

export default Content;
