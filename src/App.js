import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "./store/task-actions";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Layout/Header";
function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Form data={tasks} />
    </div>
  );
}

export default App;
