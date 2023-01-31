import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 400px;
  height: auto;
  border: 1px solid #ddd;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

export const InputGroup = styled.div`
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 2px;
`;

export const Label = styled.label`
  /*color: #555;*/
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  background: #105680;
  border: 0;
  border-radius: 2px;
  padding: 0.7rem;
  color: #bae5ff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity:${(props) => (props.isLoading ? ".6;" : "")}

  &:hover {
    background: #1572aa;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: 15px;
  color: red;
  font-size: 14px;
  left: 50%;
  transform: translateX(-50%);
`;
