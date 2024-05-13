import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  return (
    <Card>
      <Title>Add New Activity</Title>
      {/* <TextInput
        label="Activity"
        textArea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
        value={workout}
        handelChange={(e) => setWorkout(e.target.value)}
      /> */}
      <label>Title:</label>
      <input        
        label="title"
        type="text"        
        onChange={(e) => setWorkout({ ...workout, title: e.target.value })}
        value={workout.title}
        placeholder={`Title`}
      />
      {/* <label>Activity Description:</label>
      <input        
        label="description"
        type="text"        
        onChange={(e) => setWorkout({ ...workout, description: e.target.value })}
        value={workout.description}
        placeholder={`Activity Description`}
      /> */}
      {/* <label>Activity Type ID:</label>
      <input        
        label="activityTypeID"
        type="text"        
        onChange={(e) => setWorkout({ ...workout, id: +e.target.value })}
        value={workout.activityTypeID}
        placeholder={`Activity Type ID`}
      /> */}
      <label htmlFor="activityType">Select Activity:</label>
      <select id="activityType" onChange={(e) => setWorkout({ ...workout, activityTypeID: +e.target.value })}>
        <option value="">Select an activity...</option>
        <option value="1000">Walking</option>
        <option value="1001">Running</option>
        <option value="1002">Swimming</option>
        <option value="1003">Yoga</option>
        <option value="1004">Dancing</option>
        <option value="1005">Gymnastics</option>
        <option value="1006">Weight Training</option>
        <option value="1007">Zumba</option>
      </select>
      {/* {activityType && <p>Selected activity: {activityType}</p>} */}
      <label>Steps:</label>
      <input        
        label="steps"
        type="text"        
        onChange={(e) => setWorkout({ ...workout, steps: +e.target.value })}
        value={workout.steps}
        placeholder={`Steps`}
      />
      <label>Distance:</label>
      <input        
        label="distance"
        type="text"        
        onChange={(e) => setWorkout({ ...workout, distance: +e.target.value })}
        value={workout.distance}
        placeholder={`Distance`}
      />
      <label>Duration:</label>
      <input        
        label="duration"
        type="text"        
        onChange={(e) => setWorkout({ ...workout, duration: +e.target.value })}
        value={workout.duration}
        placeholder={`Duration`}
      />
      <label>Calories Burnt:</label>
      <input        
        label="calories"
        type="text"        
        onChange={(e) => setWorkout({ ...workout, calories: +e.target.value })}
        value={workout.calories}
        placeholder={`Calories`}
      />
      <Button
        text="Add Activity"
        small
        onClick={() => addNewWorkout()}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};

// const AddWorkout = ({workout, setWorkout}) => {    
//   return (
//     <Card>
//       <Title>Add New Activity</Title>
//       <TextInput
//         //label="Workout"
//         label="Activity"
//         textArea
//         rows={10}
//         placeholder={`Enter in this format:

// #Category
// -Workout Name
// -Sets
// -Reps
// -Weight
// -Duration`}
//         value={workout}
//         handelChange={(e) => setWorkout(e.target.value)}
//       />
//       <Button
//         text="Add Workout"
//         small
//         //onClick={() => addNewWorkout()}
//         //isLoading={buttonLoading}
//         //isDisabled={buttonLoading}
//       />
//     </Card>
//   );
// };

export default AddWorkout;
