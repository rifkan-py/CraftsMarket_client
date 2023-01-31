import styled from "styled-components";

export const ProductsWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
`;

export const Container = styled.div`
  width: min(1100px, 100% - 2rem);
  margin-inline: auto;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
    gap: 2rem;
  }
`;
