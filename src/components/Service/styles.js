import styled from "styled-components";

export const ServicesWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  width: min(1100px, 100% - 2rem);
  margin-inline: auto;
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const Service = styled.div`
  img {
    height: 5rem;
  }
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 12px;
    text-align: center;
  }
`;
