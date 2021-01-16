import React from "react";
import { BsArrowUp } from "react-icons/bs";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${({ scrolled }) => (scrolled ? "flex" : "none")};
  z-index: 999;
  position: fixed;
  bottom: 10vh;
  right: 6vw;
  cursor: pointer;
  background: #333;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;
const StyledIcon = styled(BsArrowUp)`
  font-size: 1.5rem;
  color: #fff;
`;

const ScrollButton = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const scrollOnClick = () => {
    window.scrollTo(0, 0);
  };

  const handlePosition = () => {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handlePosition);

    return function cleanup() {
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);

  return (
    <StyledButton onClick={scrollOnClick} scrolled={scrolled}>
      <StyledIcon />
    </StyledButton>
  );
};

export default ScrollButton;
