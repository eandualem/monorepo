import { calcHelper, header, message } from "@monorepo/message";
import { FC, Fragment } from "react";
import Link from "./components/Link";

const App: FC = () => {
  return (
    <Fragment>
      <h1>{header}</h1>
      <h2>{message}</h2>
      <p>{calcHelper(5, 5, 5, 5, 5, 5)}</p>
      <Link page="http://www.facebook.com">Facebook</Link>
    </Fragment>
  );
};

export default App;
