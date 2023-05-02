import styled from "styled-components";
import { useDarkMode } from "usehooks-ts";
import { ButtonProps } from "../../types/buttonType";

const ORDER_BUTTON_TYPE = [
  { label: "매장 주문", src: "/images/fastfood.png" },
  { label: "전체 포장", src: "/images/bag.png" },
];
export default function IntroPage() {
  const { isDarkMode } = useDarkMode();
  return (
    <Container>
      <Title>원하시는 주문을 터치해 주세요</Title>
      <ButtonContainer>
        {ORDER_BUTTON_TYPE.map((item) => (
          <Button key={item.label} isDarkMode={isDarkMode}>
            <img src={item.src} />
            <span>{item.label}</span>
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.div`
  padding-block: 10rem 25rem;
  padding-inline: 3rem;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12rem;
  display: block;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Button = styled.button.attrs<ButtonProps>(({ type, isDarkMode }) => {
  return { type: type ?? "button", isDarkMode: isDarkMode };
})<ButtonProps>`
  width: 49%;
  border-radius: 40px;
  border: 0px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.gray : theme.colors.white};
  align-items: center;
  padding-block: 8rem 8rem;
  padding-inline: 5rem 5rem;
  font-size: 4.8rem;
  font-weight: bold;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.white : theme.colors.black};
  img {
    margin-bottom: 1em;
    width: 49%;
  }
`;
