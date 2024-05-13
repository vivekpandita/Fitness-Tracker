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

const AddGoal = ({ goal, setGoal, addNewGoal, goalbuttonLoading }) => {
  return (
    <Card>
      <Title>Add New Goal</Title>
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
      <label>Goal Type ID:</label>
      <input        
        label="goalTypeID"
        type="text"        
        onChange={(e) => setGoal({ ...goal, goalTypeID: +e.target.value })}
        value={goal.goalTypeID}
        placeholder={`Goal Type ID`}
      />
      {/* <label>Activity Description:</label>
      <input        
        label="description"
        type="text"        
        onChange={(e) => setWorkout({ ...workout, description: e.target.value })}
        value={workout.description}
        placeholder={`Activity Description`}
      /> */}      
      <label>Goal Value:</label>
      <input        
        label="goalValue"
        type="text"        
        onChange={(e) => setGoal({ ...goal, goalValue: +e.target.value })}
        value={goal.goalValue}
        placeholder={`Goal Value`}
      />
      <label>Goal Unit:</label>
      <input        
        label="goalUnit"
        type="text"        
        onChange={(e) => setGoal({ ...goal, goalUnit: e.target.value })}
        value={goal.goalUnit}
        placeholder={`Goal Unit`}
      />
      <label>Duration:</label>
      <input        
        label="durationValue"
        type="text"        
        onChange={(e) => setGoal({ ...goal, durationValue: +e.target.value })}
        value={goal.durationValue}
        placeholder={`Duration`}
      />
      <label>Duration Unit:</label>
      <input        
        label="durationUnit"
        type="text"        
        onChange={(e) => setGoal({ ...goal, durationUnit: e.target.value })}
        value={goal.durationUnit}
        placeholder={`Duration Unit`}
      />
      <Button
        text="Add Goal"
        small
        onClick={() => addNewGoal()}
        isLoading={goalbuttonLoading}
        isDisabled={goalbuttonLoading}
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

export default AddGoal;
