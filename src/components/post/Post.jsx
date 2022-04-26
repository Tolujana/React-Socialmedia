import React from "react";
import styles from "./Post.module.css";
import PublicIcon from "@mui/icons-material/Public";
import MoreMenu from "../moreMenu/MoreMenu";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";

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

          <MoreMenu />
        </div>
        <div className={styles.postMiddle}>
          <span className={styles.postText}>This is my first post </span>
          <img
            src="assets/persons/3.jpg"
            alt=""
            className={styles.postContentImg}
          />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomStats}>
            <div className={styles.likes}>
              <img className={styles.postLike} src="assets/likes.png" alt="" />
              <span className={styles.likesCounter}>966</span>
            </div>
            <div className={styles.counters}>
              <span className={styles.commentCounter}>2.1k Comments</span>
              <span className={styles.shareCounter}>998 Shares</span>
            </div>
          </div>
          <hr className={styles.postLine} />
          <div className={styles.postActions}>
            <div className={styles.postBottomAction}>
              <ThumbUpIcon />
              <div className={styles.like} id="">
                Like
              </div>
            </div>
            <div className={styles.postBottomAction}>
              <ChatBubbleOutlineIcon />
              <div className={styles.comment} id="">
                Comment
              </div>
            </div>
            <div className={styles.postBottomAction}>
              <ReplyIcon />
              <div className={styles.share} id="">
                Share
              </div>
            </div>
          </div>
          <hr className={styles.postLine} />
          <div className={styles.postBottomcomments}></div>
        </div>
      </div>
    </div>
  );
};
export default Post;
