import { AboutWrapper, Container } from "./styles";

const About = () => {
  return (
    <AboutWrapper>
      <Container>
        <div>
          <h1>About Us</h1>
          <p>
            CraftsMarket is a one-stop shop for unique and handcrafted products.
            Our platform is dedicated to supporting local artisans and makers by
            providing a space to showcase their creations. We believe in the
            power of community, creativity and sustainability, and strive to
            bring these values to life through the products we offer. Whether
            you're looking for a one-of-a-kind gift or a special item for your
            home, you'll find it here at CraftsMarket. Start exploring our
            collection today and discover the beauty of handmade goods.
          </p>
        </div>
        <div>
          <img src="/about.svg" alt="about" />
        </div>
      </Container>
    </AboutWrapper>
  );
};

export default About;
