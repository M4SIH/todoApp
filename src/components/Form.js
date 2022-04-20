import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { formActions } from "../store/form-slice";
import { deleteTask, sendData, updateTask } from "../store/task-actions";

export default function Form(props) {
  const data = props.data;
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.form);

  const changeHandler = (event) => {
    dispatch(formActions.getInput(event.target.value));
  };

  const addTaskHandler = () => {
    dispatch(sendData(datas.input));
  };
  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
  };
  const checkHandler = (item) => {
    dispatch(updateTask(item));
  };

  return (
    <List sx={{ mx: "auto", mt: "5%", width: "100%", maxWidth: "25%" }}>
      <TextField
        sx={{ mx: "auto", width: "100%", maxWidth: "70%" }}
        id="outlined-basic"
        label="TO DO Task"
        variant="outlined"
        onChange={changeHandler}
      />
      <Button
        sx={{ ml: "4%", mt: "1%", width: "100%", maxWidth: "25%" }}
        onClick={addTaskHandler}
        variant="contained"
        size="large"
      >
        Add
      </Button>
      {data.items.length > 0 &&
        data.items.map((item) => {
          return (
            <ListItem key={item._id} sx={{ mt: "5%" }}>
              <ListItemAvatar>
                <Avatar>
                  <CheckCircleIcon
                    onClick={() => checkHandler(item)}
                    color={item.completed ? "success" : ""}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.description} />
              <Button
                onClick={() => deleteHandler(item._id)}
                variant="text"
                color="warning"
              >
                Delete
              </Button>
            </ListItem>
          );
        })}
    </List>
  );
}
