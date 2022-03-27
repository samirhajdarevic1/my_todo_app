import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import OverallFrame from "./components/OverallFrame";

function App() {
  return (
    <OverallFrame>
      <Header title={"The best todo App!"} />
      <Card>
        <InputTodo />
      </Card>
    </OverallFrame>
  );
}

export default App;
