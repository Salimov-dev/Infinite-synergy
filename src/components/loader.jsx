import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderCircle = styled.div`
  border: 4px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Loader = ({ width = "25px", height = "25px" }) => {
  return <LoaderCircle style={{ width: `${width}`, height: `${height}` }} />;
};

export default Loader;
