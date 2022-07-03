import React, { useState } from "react";
import styled from "styled-components";
import { MAIN_DATA } from "./MainData";
import Fifth from "./Number/Fifth";
import First from "./Number/First";
import Fourth from "./Number/Fourth";
import Second from "./Number/Second";
import Third from "./Number/Third";
import axios from "axios";

const Main = () => {
  const [content, setContent] = useState();

  const buttonValueSetting = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <First />,
    second: <Second />,
    third: <Third />,
    fourth: <Fourth />,
    fifth: <Fifth />
  };

  console.log(content);

  return (
    <div>
      <Container>
        {MAIN_DATA.map((data) => {
          return (
            <Button onClick={buttonValueSetting} name={data.name} key={data.id}>
              {data.text}
            </Button>
          );
        })}
      </Container>
      {content && <Content>{selectComponent[content]}</Content>}
    </div>
  );
};

export default Main;

const Container = styled.div`
  ${(props) => props.theme.flex("center", "center")}
  height: 20vh;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 1rem;
  color: #111111;
  background-color: #eeeeee;
  border-radius: 2rem;
`;

const Content = styled.div`
  ${(props) => props.theme.flex("center", "center")}
  width: 100%;
  height: 100%;
`;
