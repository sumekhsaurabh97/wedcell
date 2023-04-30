import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faCircle,
  faTimesCircle,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card";

import styles from "./styles/GetJob.module.scss";

const Getjob = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header} style={{ backgroundColor: "black" }}>
          <nav className={styles.navigations}>
            <div className={styles.logo}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                className={styles.nav_icons}
              ></FontAwesomeIcon>
            </div>
            <div className={styles.nav}>
              <ul className={styles.nav_list}>
                <li>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={styles.nav_icons}
                  ></FontAwesomeIcon>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={styles.nav_icons}
                  ></FontAwesomeIcon>
                </li>
                <li>
                  <div className={styles.default_profile_pic}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className={styles.profile_icon}
                    ></FontAwesomeIcon>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className={styles.header_content}>
            <div className={styles.header_content_left}>
              <p className={styles.title}>Find and Get a great job <FontAwesomeIcon
                    icon={faCircle}
                    className={styles.online_shower}
                  ></FontAwesomeIcon></p>
              <p className={styles.text}>
                At the best event managing company out there!
              </p>
              <SearchBox />
            </div>
          </div>
          <div className={styles.ellepse_container}>
            <div className={styles.ellipse}>
              <Image
                src="/assets/images/stock_photography.png"
                alt=""
                width={411}
                height={550}
                className={styles.stock_photography}
              />
            </div>
          </div>
        </header>
        <Card />
      </div>
    </>
  );
};
export default Getjob;
