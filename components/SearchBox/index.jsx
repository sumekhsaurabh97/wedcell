import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch,faLocationDot, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/searchBox.module.scss";

const SearchBox = () => {
  return (
    <div className={styles.input_search_container}>
      <div className={styles.input_search}>
        <input type="text" placeholder="Event planning" />
        <div className={styles.location_dropdown}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles.searchBox_icons}
          ></FontAwesomeIcon>
          <p>UP</p>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={styles.searchBox_icons}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className={styles.search}>
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.searchBox_icons}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};
export default SearchBox;
