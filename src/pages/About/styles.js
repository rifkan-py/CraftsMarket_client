import styled from "styled-components";

export const AboutWrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  width: min(1100px, 100% - 2rem);
  margin-inline: auto;
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  > div {
    flex: 1;
  }
  img {
    display: block;
    width: 100%;
  }
  p {
    line-height: 1.6;
    margin-top: 1rem;
  }
`;
