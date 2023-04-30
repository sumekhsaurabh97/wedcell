import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { faHeart as faHeartRegular, } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
