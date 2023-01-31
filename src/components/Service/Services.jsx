import { Container, ServicesWrapper, ServiceWrapper, Service } from "./styles";

const Services = () => {
  return (
    <ServicesWrapper>
      <Container>
        <h1>Services</h1>
        <ServiceWrapper>
          <Service>
            <img src="/payment.svg" alt="payment" />
            <h3>Secure Payment</h3>
            <p>Secure payment options for transactions. </p>
          </Service>
          <Service>
            <img src="/delivery.svg" alt="delivery" />
            <h3>Delivery Service</h3>
            <p>Shipping and delivery options for both buyers and sellers.</p>
          </Service>
          <Service>
            <img src="/service.svg" alt="service" />
            <h3>Customer Care</h3>
            <p>
              Customer support and assistance with any questions or concerns
            </p>
          </Service>
        </ServiceWrapper>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;
