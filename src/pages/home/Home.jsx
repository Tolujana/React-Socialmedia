import styles from "./Home.module.css";

import Topmenu from "../../components/topmenu/topmenu";
import Leftbar from "../../components/leftbar/Leftbar";
import Content from "../../components/content/Content";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
  return (
    <div> 
      

      <Topmenu />
      <div className={styles.content}>
      <Leftbar/>
      <Content/>

    
  
      <Rightbar/>
      </div>
    </div>
  );
}
