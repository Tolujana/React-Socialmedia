import styles from "./leftbar.module.css";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupIcon from "@mui/icons-material/Group";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

function Leftbar() {
  return (
    <div className={styles.leftBar}>
      <div className={styles.leftWrapper}>
        <ul className={styles.leftmenu}>
          <li className={styles.leftListItems}>
            <GroupIcon className={styles.listICon} />
            <span className={styles.leftItems}>Friends </span>
          </li>
          <li className={styles.leftListItems}>
            <GroupsIcon className={styles.listICon} />
            <span className={styles.leftItems}>Groups</span>
          </li>
          <li className={styles.leftListItems}>
            <AddBusinessIcon className={styles.listICon} />
            <span className={styles.leftItems}>MarketPlace</span>
          </li>
          <li className={styles.leftListItems}>
            <OndemandVideoIcon className={styles.listICon} />
            <span className={styles.leftItems}>Watch</span>
          </li>
          <li className={styles.leftListItems}>
            <HistoryToggleOffIcon className={styles.listICon} />
            <span className={styles.leftItems}>Memories</span>
          </li>
        </ul>
        <button className={styles.leftbarButton}>Show more</button>
        <hr className={styles.leftbarHr} />
        <ul className={styles.leftbarFriendsList}>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
          <li className={styles.leftbarFriend}>
            <img
              src="assets/persons/3.jpg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.friendName}> James Bowell</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
