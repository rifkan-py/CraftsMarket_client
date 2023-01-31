import styled from "styled-components";

export const ProductWrapper = styled.div`
  border: 1px solid #ccc;
  > .image-container {
    height: 190px;
    position: relative
    background: red;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  > .content {
    padding: 1rem;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: #222;
  }
  h4 {
    margin: 10px 0;
  }
  .buttons {
    display: flex;
    gap: .7rem;

    button {
      border: 0;
      padding: .5rem .7rem;  
      border-radius: 4px;
      cursor: pointer;
    }

    .cart {
      background: #105680;
      color: #fff;
      transition: all .2s ease;

      &:active {
        transform: scale(.9);
      }
    }
    .details {
      background: none;
      border: 1px solid #105680;
      border: 0;
      padding: .5rem .7rem;  
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      color: #333;
    }
  }
`;
