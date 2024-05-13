import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, addGoal, getDashboardDetails, getWorkouts, getcountssData } from "../api";
import AddGoal from "../components/AddGoal";
import AuthImage from "../utils/Images/AuthImage.jpg";
import {
  FitnessCenterRounded,
  LocalFireDepartmentRounded,
  TimelineRounded,
} from "@mui/icons-material";

const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Dashboard = () => {
  const data = {
    "totalCaloriesBurnt": 13500,
    "totalWorkouts": 6,
    "avgCaloriesBurntPerWorkout": 2250,
    "totalWeeksCaloriesBurnt": {
       "weeks": [
            "17th",
      "18th",
      "19th",
      "20th",
      "21th",
      "22th",
      "23th"
        ],
      "caloriesBurned": [
            10500,
            0,
            0,
            0,
            0,
            0,
            13500
        ],
    },
    "pieChartData": [
        {
          "id":0,
          "value":6000,
          "label":"Legs"
        },
        {
          "id":1,
          "value":1500,
          "label":"Back"
        },
        {
          "id":2,
          "value":3750,
          "label":"Shoulder"
        },
        {
          "id":3,
          "value":2250,
          "label":"ABS"
        },
      ],
    };
    const counts = [
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
    const activities =  [     
      {
        "id": 5000,
        "userId": 1,
        "title": "Activity 1",
        "activityType": {
          "id": 1000,
          "abbreviation": "WK",
          "description": "Walking"
        },
        "startDate": "2019-11-28T17:58:12.776+00:00",
        "distance": 5,
        "duration": 90,
        "intensity": null,
        "calories": 700,
        "steps": 500,
        "additionalNotes": null
      },
      {
        "id": 5001,
        "userId": 1,
        "title": "Activity 2",
        "activityType": {
          "id": 1001,
          "abbreviation": "RN",
          "description": "Running"
        },
        "startDate": null,
        "distance": 2,
        "duration": 45,
        "intensity": null,
        "calories": 500,
        "steps": 5000,
        "additionalNotes": null
      },
      {
        "id": 5002,
        "userId": 1,
        "title": "Activity 3",
        "activityType": {
          "id": 1002,
          "abbreviation": "SW",
          "description": "Swimming"
        },
        "startDate": null,
        "distance": 1,
        "duration": 30,
        "intensity": null,
        "calories": 1000,
        "steps": 10,
        "additionalNotes": "Did Swimming in a 100m pool with 2 full rounds"
      },
      {
        "id": 5003,
        "userId": 2,
        "title": "Activity 4",
        "activityType": {
          "id": 1001,
          "abbreviation": "RN",
          "description": "Running"
        },
        "startDate": null,
        "distance": 2,
        "duration": 45,
        "intensity": null,
        "calories": 500,
        "steps": 2000,
        "additionalNotes": null
      }    
    ];
  const [loading, setLoading] = useState(false);
  const [activitiess, setData] = useState([]);
  const [countss, setCountss] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [goalbuttonLoading, setGoalButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  // const [workout, setWorkout] = useState("");
  const [workout, setWorkout] = useState(
    {
    "id":123,    
    "userId": 1,
    "title": "Activity ",    
    "activityTypeID": 1000,
    //"description": "Walking",        
    "distance": 5,
    "duration": 60,    
    "calories": 1000,
    "steps": 700    
    }
  );
//   const [workout, setWorkout] = useState(`#Legs
// -Back Squat
// -5 setsX15 reps
// -30 kg
// -10 min`);
const [goal, setGoal] = useState(
  {
    "id":4,
    "goalTypeID" : 2000,
    "goalValue": 30,
    "goalUnit": "inches",
    "durationValue": 200,
    "durationUnit": "days"    
  }
);

  // const dashboardData = async () => {
  //   setLoading(true);
  //   const token = localStorage.getItem("fittrack-app-token");
  //   await getDashboardDetails(token).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //     setLoading(false);
  //   });
  // };
  const dashboardData = async () => {
    setLoading(true);
    //const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails().then((res) => {
      setData(res.data);
      console.log("activities:");
      console.log(res.data);
    // firstElement = res.data[0];
    // console.log("DashboardData0:");
    // console.log(firstElement);
      setLoading(false);
    });
  };
  const countssData = async () => {
    setLoading(true);
    //const token = localStorage.getItem("fittrack-app-token");
    await getcountssData().then((res) => {
      setCountss(res.data);
      console.log("counts:");
      console.log(res.data);
      setLoading(false);
    });
  };
  // const getTodaysWorkout = async () => {
  //   setLoading(true);
  //   const token = localStorage.getItem("fittrack-app-token");
  //   await getWorkouts(token, "").then((res) => {
  //     setTodaysWorkouts(res?.data?.todaysWorkouts);
  //     console.log(res.data);
  //     setLoading(false);
  //   });
  // };
  const getTodaysWorkout = async () => {
    setLoading(true);
    //const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts().then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
      setLoading(false);
    });
  };
  const addNewWorkout = async () => {
    setButtonLoading(true);
    //const token = localStorage.getItem("fittrack-app-token");
    console.log("Add new workout:");
    console.log(workout);
    await addWorkout(workout)
      .then((res) => {
        dashboardData();        
        //getTodaysWorkout();
        setButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const addNewGoal = async () => {
    setGoalButtonLoading(true);
    //const token = localStorage.getItem("fittrack-app-token");
    console.log("Add new goal:");
    console.log(goal);
    await addGoal(goal)
      .then((res) => {
        //dashboardData();        
        //getTodaysWorkout();
        setGoalButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    dashboardData();
    countssData();        
    getTodaysWorkout();
  }, []);  
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <Section>
          <Title>Todays Activities</Title>
          <CardWrapper>
            {/* {todaysWorkouts.map((workout) => (
              <WorkoutCard workout={workout} />
            ))} */}
            {/* <WorkoutCard activities={activities}/> */}
            
            {activitiess.map((activity) => (
              <WorkoutCard description={activity.activityType.description} title={activity.title} steps={activity.steps} distance={activity.distance} duration={activity.duration} calories={activity.calories} />
            ))}
            
            {/* <WorkoutCard />
            <WorkoutCard />             */}
          </CardWrapper>
        </Section>
        
        <Title>Activity/Goals</Title>
        <FlexWrap>
          <Left>            
            <Image src={AuthImage} />
          </Left>
          <AddWorkout
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
          {/* <AddGoal
            goal={goal}
            setGoal={setGoal}
            addNewGoal={addNewGoal}
            goalbuttonLoading={goalbuttonLoading}
          /> */}
        </FlexWrap>

        

        {/* <FlexWrap>
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />          
        </FlexWrap>     */}

      </Wrapper>
    </Container>
  );
};

export default Dashboard;
