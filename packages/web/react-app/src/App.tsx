import { calcHelper, header, message } from "@monorepo/message";
import Link from "./components/Link";

const App = (): JSX.Element => {
  return (
    <>
      <h1>{header}</h1>
      <h2>{message}</h2>
      <p>{calcHelper(5, 5, 5, 5, 5, 5)}</p>
      <Link page="http://www.facebook.com">Facebook</Link>
    </>
  );
};

export default App;
