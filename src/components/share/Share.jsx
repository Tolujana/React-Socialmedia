import React from "react";
import styles from "./Share.module.css";
import TheatersIcon from "@mui/icons-material/Theaters";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

function Share() {
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img src="assets/persons/3.jpg" alt="" className={styles.sharepics} />
          <input
            placeholder="what's on your mind"
            className={styles.shareInput}
          />
        </div>
        <hr className={styles.shareHr} />
        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <TheatersIcon htmlColor="red" className={styles.shareIcon} />
              <span className={styles.ShareOptionText}>Live Video</span>
            </div>
            <div className={styles.shareOption}>
              <PhotoLibraryIcon
                htmlColor="green"
                className={styles.shareIcon}
              />
              <span className={styles.ShareOptionText}>Photo/Video</span>
            </div>
            <div className={styles.shareOption}>
              <MoodIcon htmlColor="Goldenrod" className={styles.shareIcon} />
              <span className={styles.ShareOptionText}>Feeling/Activity</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chat}>
        <div className={styles.chatButton}>
          <VideoCameraFrontIcon className={styles.chatIcon} />
          <span className={styles.chatText}>Create room</span>
        </div>
        <div className={styles.friends}>
          <img src="assets/persons/1.jpg" alt="" className={styles.chatImg} />
          <img src="assets/persons/1.jpg" alt="" className={styles.chatImg} />
          <img src="assets/persons/1.jpg" alt="" className={styles.chatImg} />
          <img src="assets/persons/1.jpg" alt="" className={styles.chatImg} />
          <img src="assets/persons/1.jpg" alt="" className={styles.chatImg} />
          <img src="assets/persons/1.jpg" alt="" className={styles.chatImg} />
        </div>
      </div>
    </div>
  );
}

export default Share;
