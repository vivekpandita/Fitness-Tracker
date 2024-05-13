import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, addGoal, getDashboardDetails, getWorkouts } from "../api";
import AddGoal from "../components/AddGoal";
import GoalCard from "../components/cards/GoalCard";
import AuthImage2 from "../utils/Images/AuthImage2.jpg";
import PlanCard from "../components/cards/PlanCard";

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

const Workoutplans = () => {  
    
    const planss =  [     
        {            
            "planTitle": "Full Body Strength Training",
            "squats" : "Squats: 3 sets x 10 reps",
            "pushups": "Push-ups: 3 sets x 12 reps",
            "bentoverRows": "Bent-over Rows: 3 sets x 10 reps",
            "Lunges": "Lunges: 3 sets x 12 reps (each leg)",
            "plank": "Plank: 3 sets x 30 seconds" 
        },
        {
            "planTitle": "Cardio and Endurance",
            "squats" : "Jogging: 20 minutes",
            "pushups": "Cycling: 15 minutes",
            "bentoverRows": "Jumping Jacks: 3 sets x 30 seconds",
            "Lunges": "Mountain Climbers: 3 sets x 12 reps",
            "plank": "Burpees: 3 sets x 10 reps" 
        },
        {
            "planTitle": "Core Strengthening",
            "squats" : "Bicycle Crunches: 3 sets x 15 reps (each side)",
            "pushups": "Russian Twists: 3 sets x 20 reps (with or without weight)",
            "bentoverRows": "Leg Raises: 3 sets x 12 reps",
            "Lunges": "Plank with Shoulder Taps: 3 sets x 10 taps (each side)",
            "plank": "Side Planks: 3 sets x 20 seconds (each side)" 
        },
        {
            "planTitle": "HIIT (High-Intensity Interval Training)",
            "squats" : "Sprint Intervals: 30 seconds sprint, 1 minute recovery (repeat 5 times)",
            "pushups": "Burpees: 3 sets x 10 reps",
            "bentoverRows": "Jump Squats: 3 sets x 15 reps",
            "Lunges": "Push-ups: 3 sets x 12 reps",
            "plank": "Mountain Climbers: 3 sets x 20 reps" 
        }    
      ];
  const [loading, setLoading] = useState(false);
  const [plansss, setData] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [goalbuttonLoading, setGoalButtonLoading] = useState(false);
  //const [todaysWorkouts, setTodaysWorkouts] = useState([]);
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
const [plan, setPlan] = useState(
  {
    "id":1,
    "goalTitle": "Goal 1",
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
  const plansData = async () => {
    setLoading(true);
    //const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails().then((res) => {
      setData(res.data);
      console.log("plans:");
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
//   const getTodaysWorkout = async () => {
//     setLoading(true);
//     //const token = localStorage.getItem("fittrack-app-token");
//     await getWorkouts().then((res) => {
//       setTodaysWorkouts(res?.data?.todaysWorkouts);
//       console.log(res.data);
//       setLoading(false);
//     });
//   };
//   const addNewWorkout = async () => {
//     setButtonLoading(true);
//     //const token = localStorage.getItem("fittrack-app-token");
//     console.log("Add new workout:");
//     console.log(workout);
//     await addWorkout(workout)
//       .then((res) => {
//         dashboardData();        
//         //getTodaysWorkout();
//         setButtonLoading(false);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   const addNewPlan = async () => {
//     setGoalButtonLoading(true);
//     //const token = localStorage.getItem("fittrack-app-token");
//     console.log("Add new plan:");
//     console.log(plan);
//     await addPlan(plan)
//       .then((res) => {
//         //dashboardData();        
//         //getTodaysWorkout();
//         setGoalButtonLoading(false);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

  useEffect(() => {
    //goalsData();       
    
  }, []);  
  return (
    <Container>
      <Wrapper>
        <Title>Pre-designed workout plans tailored to your needs</Title>       

        <Section>
          {/* <Title>My Plans</Title> */}
          <CardWrapper>            
            
            {planss.map((plan) => (
              <PlanCard planTitle={plan.planTitle} squats={plan.squats} pushups={plan.pushups} bentoverRows={plan.bentoverRows} Lunges={plan.Lunges} plank={plan.plank} />
            ))}            
            
          </CardWrapper>
        </Section>
        
               

      </Wrapper>
    </Container>
  );
};

export default Workoutplans;
