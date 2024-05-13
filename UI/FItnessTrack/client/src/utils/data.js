import {
  FitnessCenterRounded,
  LocalFireDepartmentRounded,
  TimelineRounded,
} from "@mui/icons-material";

export const counts = [
  {
    name: "Calories Burned",
    icon: (
      <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
    ),
    desc: "Total calories burned today",
    key: "totalCaloriesBurnt",
    unit: "kcal",
    color: "#eb9e34",
    lightColor: "#FDF4EA",
  },
  {
    //name: "Workouts",
    name: "Activities",
    icon: <FitnessCenterRounded sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Total no of activities for today",
    key: "totalWorkouts",
    unit: "",
    color: "#41C1A6",
    lightColor: "#E8F6F3",
  },
  {
    name: "Average  Calories Burned",
    icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Average Calories Burned on each activity",
    key: "avgCaloriesBurntPerWorkout",
    unit: "kcal",
    color: "#FF9AD5",
    lightColor: "#FEF3F9",
  },
];

// export const activityData = [
//   {
//     id: 5000,
//   userId: null,
//   title: "Walk",
//   activityType: {
//     id: 1000,
//     abbreviation: "WK",
//     description: "Walking"
//   },
//   startDate: "2019-11-28T17:58:12.776+00:00",
//   distance: null,
//   duration: null,
//   intensity: null,
//   calories: null,
//   steps: 500,
//   additionalNotes: null
//   },
// ];
