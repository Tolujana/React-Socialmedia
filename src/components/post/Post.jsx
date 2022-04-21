import React from "react";
import styles from "./Post.module.css";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <img src="assets/persons/2.jpg" alt="" className={styles.postImg} />
          <div className={styles.postDetail}>
            <span className={styles.postName}>Tolu Olofinjana</span>
            <div className={styles.time}>
              <span className={styles.timeStamp}>5min ago</span>
              <span className={styles.timeStampDot}>.</span>
              <PublicIcon className={styles.timeIcon} />
            </div>
          </div>

          <MoreHorizIcon className={styles.menu} />
        </div>
        <div className={styles.postMiddle}>
          <span className={styles.postText}>This is my first post </span>
          <img
            src="assets/persons/3.jpg"
            alt=""
            className={styles.postcontentImg}
          />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomStats}></div>
          <div className={styles.postActions}>
            <div className={styles.postBottomLeft}></div>
            <div className={styles.postBottomCenter}></div>
            <div className={styles.postBottomaRight}></div>
          </div>
          <div className={styles.postBottomcomments}></div>
        </div>
      </div>
    </div>
  );
};
export default Post;
