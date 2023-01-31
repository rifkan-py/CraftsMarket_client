import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  width: min(1100px, 100% - 2rem);
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 12px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  display: flex;

  @media (max-width: 630px) {
    display: none;
  }
`;

export const Logo = styled.div`
  position: relative;
  img {
    width: 120px;
  }
`;

export const MenuIcon = styled.div`
  position: relative;
  display: none;
  img {
    width: 32px;
  }

  @media (max-width: 630px) {
    display: block;
  }
`;

export const Search = styled.div`
  position: relative;
  input {
    border: 1px solid #ccc;
    padding: 0.3rem;
    border-radius: 2px;
  }
`;

export const Logout = styled.button`
  color: #333;
  font-size: 12px;
  background: #105680;
  color: #bae5ff;
  padding: 0.5rem 1rem;
  font-size: 12px;
  border-radius: 4px;
  font-weight: bold;
  border: 0;
`;

export const ShoppingCart = styled.div`
  position: relative;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
  .qty {
    background: red;
    color: white;
    padding: 0.3rem;
    font-size: 12px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -10px;
    right: -10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  span {
    font-size: 10px;
  }
`;

export const NoAuthButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &:hover > .popover-content {
    display: flex;
  }
`;

export const PopOverContent = styled.div`
  position: absolute;
  top: 45px;
  background: #fff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  z-index: 100;
  display: none;

  a {
    text-decoration: none;
    color: #333;
    padding: 0.8rem 1.5rem;

    &:hover {
      background: #f5f5f5;
    }
  }
`;
