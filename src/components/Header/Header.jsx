import {
  Container,
  Description,
  ShopNow,
  HeaderContent,
  HeaderImage,
  HeaderWrapper,
  Headline,
} from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Headline>
            Discover Unique{" "}
            <span style={{ color: "#105680" }}>Handmade Crafts</span> from Local
            Artisans
          </Headline>
          <Description>
            Discover one-of-a-kind pieces that will elevate your style and make
            a fashion statement. Our collection of handmade jewelry and
            accessories are crafted by skilled artisans using high-quality
            materials.
          </Description>
          <ShopNow href="/">Shop Now</ShopNow>
        </HeaderContent>
        <HeaderImage>
          <img src="/hero.jpg" alt="Hero" />
        </HeaderImage>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
