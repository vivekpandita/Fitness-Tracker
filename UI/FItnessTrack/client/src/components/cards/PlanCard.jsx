import { FitnessCenterRounded, TimelapseRounded, DirectionsRunRounded, RouteRounded,  LocalFireDepartmentRounded} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;
const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  background: ${({ theme }) => theme.primary + 20};
  padding: 4px 10px;
  border-radius: 8px;
`;
const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;
const Sets = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  gap: 6px;
`;
const Flex = styled.div`
  display: flex;
  gap: 16px;
`;
const Details = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PlanCard = ({planTitle, squats, pushups, bentoverRows, Lunges, plank}) => {  
  return (
    <Card>      
      <Category>#Plan</Category>
      <Name>{planTitle}</Name>
      <Sets>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {squats}
        </Details>
      </Sets>
      <Sets>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {pushups}
        </Details>
      </Sets>
      <Sets>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {bentoverRows}
        </Details>
      </Sets>
      <Sets>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {Lunges}
        </Details>
      </Sets>
      <Sets>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {plank}
        </Details>
      </Sets>      
    </Card>
  );
};

export default PlanCard;
