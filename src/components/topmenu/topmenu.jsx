import React from "react";
import styles from "./topmenu.module.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

function Topmenu() {
  return (
    <div className={styles.topmenuContainer}>
      <div className={styles.topmenuLeft}>
        <span className={styles.logo}>FinJana</span>
      </div>
      <div className={styles.topmenuCenter}>
        <div className={styles.searchBar}>
          <SearchIcon />
          <input
            placeholder="Search for friends"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.topmenuRight}>
        <div className="topmenuLinks">
          <span className={styles.toplink}>HomePage</span>
          <span className={styles.toplink}>Timeline</span>
        </div>
        <div className={styles.topmenuIcons}>
          <div className={styles.topmenuIconItem}>
            <PersonIcon />
            <span className={styles.topmenuIconValue}>1</span>
          </div>
          <div className={styles.topmenuIconItem}>
            <ChatBubbleIcon />
            <span className={styles.topmenuIconValue}>1</span>
          </div>
          <div className={styles.topmenuIconItem}>
            <PublicIcon />
            <span className={styles.topmenuIconValue}>1</span>
          </div>
        </div>
        <img src="Assets/persons/1.jpg" alt="" className={styles.profilepic} />
      </div>
    </div>
  );
}

export default Topmenu;
