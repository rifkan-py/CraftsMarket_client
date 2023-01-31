import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  position: relative;
`;

export const Container = styled.div`
  width: min(1100px, 100% - 2rem);
  margin-inline: auto;
  padding: 5rem 0;
  display: flex;
  gap: 2rem;
`;

export const HeaderImage = styled.div`
  flex: 1;
  height: 100%;
  img {
    display: block;
    width: 100%;
  }
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const Headline = styled.h1`
  font-size: 2.8rem;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const ShopNow = styled.a`
  text-decoration: none;
  padding: 0.7rem;
  background: #105680;
  display: inline-block;
  margin-top: 2rem;
  color: #bae5ff;
  border-radius: 2px;
`;
