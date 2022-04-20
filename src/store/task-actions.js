import { taskActions } from "./task-slice";
import uiActions from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVkMjBlMzk2YjJlMmNhNjI0NzkxNTIiLCJpYXQiOjE2NTAyNzExMTZ9.GFva7tI3lDjH-NadzX5GWRzmtR-rXzxv1eiVpiE_bZo"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const response = await fetch(
        "http://185.126.200.101:4005/tasks",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const tasksData = await fetchData();
      dispatch(
        taskActions.getTasksData({
          items: tasksData || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendData = (task) => {
  return (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVkMjBlMzk2YjJlMmNhNjI0NzkxNTIiLCJpYXQiOjE2NTAyNzExMTZ9.GFva7tI3lDjH-NadzX5GWRzmtR-rXzxv1eiVpiE_bZo"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      description: task,
      completed: false,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://185.126.200.101:4005/tasks", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    dispatch(taskActions.addTask(task));
  };
};
export const deleteTask = (id) => {
  return (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVkMjBlMzk2YjJlMmNhNjI0NzkxNTIiLCJpYXQiOjE2NTAyNzExMTZ9.GFva7tI3lDjH-NadzX5GWRzmtR-rXzxv1eiVpiE_bZo"
    );

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`http://185.126.200.101:4005/tasks/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    dispatch(taskActions.deleteTask(id));
  };
};
export const updateTask = (task) => {
  return (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVkMjBlMzk2YjJlMmNhNjI0NzkxNTIiLCJpYXQiOjE2NTAyNzExMTZ9.GFva7tI3lDjH-NadzX5GWRzmtR-rXzxv1eiVpiE_bZo"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      description: task.description,
      completed: !task.completed,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://185.126.200.101:4005/tasks/${task._id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    dispatch(taskActions.updateTask(task._id));
  };
};
