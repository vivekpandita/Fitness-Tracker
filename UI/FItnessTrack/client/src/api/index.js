import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/",
});

//export const UserSignUp = async (data) => API.post("/user/signup", data);
//export const UserSignIn = async (data) => API.post("/user/signin", data);


// export const getDashboardDetails = async (token) =>
//   API.get("/user/dashboard", {
//     headers: { Authorization: `Bearer ${token}` },
//   });
export const getDashboardDetails = async () => API.get("/activity/list");
export const getcountssData = async () => API.get("/progress/user/1");

export const getWorkouts = async () => API.get("/activity/list");

// export const getWorkouts = async (token, date) =>
//   await API.get(`/user/workout${date}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const addWorkout = async (token, data) =>
//   await API.post(`/user/workout`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

export const addWorkout = async (data) => API.post("/activity/save", data);
export const addGoal = async (data) => API.post("/goal/save", data);