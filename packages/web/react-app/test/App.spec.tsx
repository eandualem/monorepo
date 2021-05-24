import { create, act } from "react-test-renderer";
import App from "../src/App";

test("Link changes the class when hovered", () => {
  // render the component
  let component;
  act(() => {
    component = create(<App />);
  });
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
