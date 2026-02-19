import clsx from "clsx";

import { StyledDiv } from "./style";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerMenuIcon = ({ isOpen, onClick }: Props) => {
  return (
    <StyledDiv
      className={clsx("hamburgerMenu ", {
        "is-active": isOpen,
      })}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </StyledDiv>
  );
};

export default HamburgerMenuIcon;
