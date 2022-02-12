import "../styles/globals.css";
import Theme from "../src/components/Theme";
import Token from "../src/components/Token";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Token>
        <Component {...pageProps} />
      </Token>
    </Theme>
  );
};

export default MyApp;
