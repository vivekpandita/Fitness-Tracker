import React from "react";
import styled from "styled-components";
import { FitnessCenterRounded, TimelapseRounded, DirectionsRunRounded, RouteRounded,  LocalFireDepartmentRounded} from "@mui/icons-material";

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
  max-width: 1600px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;
const Card = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  display: flex;
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 600px) {
    gap: 6px;
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
const Value = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  align-items: end;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;
const Unit = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;
const Span = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 12px;
  }

  ${({ positive, theme }) =>
    positive
      ? `
  color: ${theme.green};`
      : `
  color: ${theme.red};`}
`;
const Icon = styled.div`
  height: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  ${({ color, bg }) => `
  background: ${bg};
  color: ${color};
  `}
`;

const Desc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + 90};
  margin-bottom: 6px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// const CountsCard = ({ item, data }) => {
//   return (
//     <Card>
//       <Left>
//         <Title>{item.name}</Title>
//         <Value>
//           {data && data[item.key].toFixed(2)}
//           <Unit>{item.unit}</Unit>
//           <Span positive>(+10%)</Span>
//         </Value>
//         <Desc>{item.desc}</Desc>
//       </Left>
//       <Icon color={item.color} bg={item.lightColor}>
//         {item.icon}
//       </Icon>
//     </Card>
//   );
// };

const CountsCard = ({ countss }) => {
  return (
    <Container>
      <Wrapper>
      <Card>
        {/* <Left>
          <Title>{item.name}</Title>
          <Value>
            {countss && countss[item.key].toFixed(2)}
            <Unit>{item.unit}</Unit>
            <Span positive>(+10%)</Span>
          </Value>
          <Desc>{item.desc}</Desc>
        </Left>
        <Icon color={item.color} bg={item.lightColor}>
          {item.icon}
        </Icon> */}
        <Left>
          <Title>Calories Burned</Title>
          <Value>
            {countss.totalCalories}
            <Unit>kcal</Unit>
            <Span positive>(+5%)</Span>
          </Value>
          <Desc>Total calories burned today</Desc>
        </Left>
        <Icon color="#eb9e34" bg="#FDF4EA">
          (
            <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
          )
        </Icon>
      </Card>
      <Card>
      <Left>
        <Title>Total Distance</Title>
          <Value>
            {countss.totalDistance}
            <Unit>Km</Unit>
            <Span positive>(+10%)</Span>
          </Value>
          <Desc>Total distance covered today</Desc>
        </Left>
        <Icon color="#41C1A6" bg="#E8F6F3">
          (
            <RouteRounded sx={{ color: "inherit", fontSize: "26px" }} />
          )
        </Icon>
      </Card>
      <Card>
      <Left>
        <Title>Total Duration</Title>
          <Value>
            {countss.totalDuration}
            <Unit>minutes</Unit>
            <Span positive>(+20%)</Span>
          </Value>
          <Desc>Total time spent today</Desc>
        </Left>
        <Icon color="#eb9e34" bg="#FDF4EA">
          (
            <TimelapseRounded sx={{ color: "inherit", fontSize: "26px" }} />
          )
        </Icon>
      </Card>
      <Card>
      <Left>
        <Title>Total Steps</Title>
          <Value>
            {countss.totalSteps}
            <Unit>steps</Unit>
            <Span positive>(+10%)</Span>
          </Value>
          <Desc>Total steps count</Desc>
        </Left>
        <Icon color="#41C1A6" bg="#E8F6F3">
          (
            <DirectionsRunRounded sx={{ color: "inherit", fontSize: "26px" }} />
          )
        </Icon>
      </Card>
      </Wrapper>
    </Container>  
    
  );
};

export default CountsCard;
