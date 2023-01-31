import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { register } from "../../app/features/authSlice";
import {
  Button,
  Container,
  ErrorMessage,
  Form,
  Input,
  InputGroup,
  Label,
  Select,
} from "./styles";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValues.username) {
      setFormErrors((prev) => {
        return { ...formErrors, username: "Username is required" };
      });
      return;
    }
    if (!formValues.firstName) {
      setFormErrors((prev) => {
        return { ...formErrors, firstName: "First Name is required" };
      });
      return;
    }
    if (!formValues.lastName) {
      setFormErrors((prev) => {
        return { ...formErrors, lastName: "Last Name is required" };
      });
      return;
    }
    if (!formValues.email) {
      setFormErrors((prev) => {
        return { ...formErrors, email: "Email is required" };
      });
      return;
    }
    if (!formValues.password) {
      setFormErrors((prev) => {
        return { ...formErrors, password: "Password is required" };
      });
      return;
    }
    if (formValues.password !== formValues.confirmPassword) {
      setFormErrors((prev) => {
        return { ...formErrors, confirmPassword: "passwords do not match" };
      });
      return;
    }
    const res = await dispatch(register(formValues));
    if (res.meta.requestStatus === "fulfilled") {
      navigate(from, { replace: true });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <InputGroup>
          <Input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            placeholder="Username"
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <Label htmlFor="username">
            {formErrors.username && formErrors.username}
          </Label>
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            placeholder="First Name"
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <Label htmlFor="firstName">
            {formErrors.firstName && formErrors.firstName}
          </Label>
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            placeholder="Last Name"
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <Label htmlFor="lastName">
            {formErrors.lastName && formErrors.lastName}
          </Label>
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
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
        <InputGroup>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <Label htmlFor="confirmPassword">
            {formErrors.confirmPassword && formErrors.confirmPassword}
          </Label>
        </InputGroup>
        <InputGroup>
          <Select name="role" id="role">
            <option value="USER">User (Buyer)</option>
            <option value="VENDOR">Vendor (Seller)</option>
          </Select>
        </InputGroup>
        <ErrorMessage>{auth.message}</ErrorMessage>
        <Button isLoading={auth.isLoading} disabled={auth.isLoading}>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
