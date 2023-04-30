import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch, faLocationDot, faCalendarDays, faHome, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faClock,} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

import { CardData } from "../../Data/CardData";

import styles from "./styles/card.module.scss";

const Card = () => {
  return (
    <>
      {CardData.map((item) => {
        return (
          <>
            <h1 className={styles.result}>Results for “Event planning”</h1>
            <div className={styles.card}>
              <div className={styles.card_album}>
                <Image
                  src="/assets/images/ablum_cover_img.png"
                  alt=""
                  width={299}
                  height={318}
                  className={styles.card_album_cover_img}
                />
                <Image
                  src="/assets/images/album_img_1.png"
                  alt=""
                  width={87}
                  height={101}
                  className={styles.album_img}
                />
                <Image
                  src="/assets/images/album_img_2.png"
                  alt=""
                  width={87}
                  height={101}
                  className={styles.album_img}
                />
                <Image
                  src="/assets/images/album_img_3.png"
                  alt=""
                  width={87}
                  height={101}
                  className={styles.album_img}
                />
                <Image
                  src="/assets/images/album_img_4.png"
                  alt=""
                  width={87}
                  height={101}
                  className={styles.album_img}
                />
                <Image
                  src="/assets/images/album_img_5.png"
                  alt=""
                  width={87}
                  height={101}
                  className={styles.album_img}
                />
                <Image
                  src="/assets/images/album_img_6.png"
                  alt=""
                  width={87}
                  height={101}
                  className={styles.album_img}
                />
              </div>
              <div>
                <div className={styles.profile}>
                  <div className={styles.role_location}>
                    <div className={styles.role}>
                      <FontAwesomeIcon
                        icon={faSearch}
                        className={styles.card_icons}
                      ></FontAwesomeIcon>
                      <p className={styles.card_text}>{item.role}</p>
                    </div>
                    <div className={styles.location}>
                      <FontAwesomeIcon
                        icon={faLocationDot }
                        className={styles.card_icons}
                      ></FontAwesomeIcon>
                      <p className={styles.card_text}>{item.location}</p>
                    </div>
                  </div>

                  <div className={styles.timePeriod_home}>
                    <div className={styles.time_period}>
                      <FontAwesomeIcon
                        icon={faClock}
                        className={styles.card_icons}
                      ></FontAwesomeIcon>
                      <p className={styles.card_text}>{item.timePeriod}</p>
                    </div>
                    <div className={styles.home}>
                      <FontAwesomeIcon
                        icon={faHome}
                        className={styles.card_icons}
                      ></FontAwesomeIcon>
                      <p className={styles.card_text}>
                        DLF Mall of India, Noida
                      </p>
                    </div>
                  </div>
                </div>
                <button className={`${styles.card_btn} ${styles.card_text}`}>
                  <FontAwesomeIcon
                    icon={faLockOpen}
                    className={styles.card_icons}
                  ></FontAwesomeIcon>
                  Pay Rs 50 to see complete profile
                </button>
                <div className={styles.date_time}>
                  <div className={styles.date}>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className={styles.card_icons}
                    ></FontAwesomeIcon>
                    <p className={styles.card_text}>Date</p>
                    <p className={`${styles.card_text} ${styles.btn}`}>
                      1 May 2023
                    </p>
                  </div>
                  <div className={styles.time}>
                    <FontAwesomeIcon
                      icon={faClock}
                      className={styles.card_icons}
                    ></FontAwesomeIcon>
                    <p className={styles.card_text}>Date</p>
                    <p className={`${styles.card_text} ${styles.btn}`}>12 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Card;
