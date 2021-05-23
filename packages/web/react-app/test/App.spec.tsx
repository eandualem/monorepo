import renderer from "react-test-renderer";
import App from "../src/App";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
