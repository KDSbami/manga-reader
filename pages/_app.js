import "../styles/globals.css";
import Theme from "../src/components/Theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
};

export default MyApp;
