import React, { MouseEvent, useState } from "react";
import styled, { css } from "styled-components";
import { useDarkMode } from "usehooks-ts";
import Switch from "./compoenets/Switch";
type HeaderProps = {
  isDarkMode: boolean;
};
export default function Header() {
  const { toggle, isDarkMode } = useDarkMode();

  return (
    <StyledHeader isDarkMode={isDarkMode}>
      <Container>
        <Logo />
        <h1>메가테라 푸드코트 키오스크</h1>
      </Container>
      <Container>
        <Switch
          label={["밝게", "어둡게"]}
          isDarkMode={isDarkMode}
          toggle={toggle}
        />
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header.attrs<HeaderProps>(({ isDarkMode }) => {
  return { isDarkMode: isDarkMode };
})<HeaderProps>`
  font-size: 4.8rem;
  font-weight: bold;
  padding-block: 1.5rem;
  padding-inline: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img.attrs({
  src: "/images/logo.png",
  width: 68,
  height: 60,
})``;
