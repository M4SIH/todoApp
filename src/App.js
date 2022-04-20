import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "./store/task-actions";
import Form from "./components/Form";
import Header from "./components/Layout/Header";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Form data={tasks} />
      {loading && (
        <Box sx={{ mx: "auto", mt: "5%", width: "30%", maxWidth: "5%" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default App;
