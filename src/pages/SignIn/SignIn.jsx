import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../app/features/authSlice";
import { userSchema } from "../../validation/UserValidation";
import {
  Button,
  Container,
  ErrorMessage,
  Form,
  Input,
  InputGroup,
  Label,
} from "./styles";

const SignIn = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [formValues, setFormValues] = useState({});
  const [formErrors] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(login(formValues));

    if (res.meta.requestStatus === "fulfilled") {
      navigate(from, { replace: true });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <InputGroup>
          <Input
            type="text"
            className="email"
            id="email"
            name="email"
            value={formValues.email}
            placeholder="Email"
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <Label htmlFor="email">{formErrors.email && formErrors.email}</Label>
        </InputGroup>
        <InputGroup>
          <Input
            type="password"
            className="password"
            id="password"
            name="password"
            value={formValues.password}
            placeholder="Password"
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <Label htmlFor="password">
            {formErrors.password && formErrors.password}
          </Label>
        </InputGroup>
        <ErrorMessage>{auth.message}</ErrorMessage>
        <Button isLoading={auth.isLoading} disabled={auth.isLoading}>
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
