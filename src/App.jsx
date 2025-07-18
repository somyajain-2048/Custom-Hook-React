import ToggleComponent from "./components/ToggleComponent";
import UsersList from "./components/UserList";
import { ExpensiveCalc } from "../src/UseMemohook/Usememo";
function App() {
  return (
    <div>
      {/* <ToggleComponent />
      <hr />
      <UsersList /> */}
      <ExpensiveCalc />
    </div>
  );
}

export default App;
