import styled from "styled-components";

interface SwitchProps {
  label: string[];
  isDarkMode: boolean;
  toggle: () => void;
}

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  isDarkMode: boolean;
};

export default function Switch({ label, isDarkMode, toggle }: SwitchProps) {
  return (
    <Button onClick={toggle} isDarkMode={isDarkMode}>
      {label.map((label) => {
        return <Text isDarkMode={isDarkMode}>{label}</Text>;
      })}
    </Button>
  );
}

const Button = styled.button.attrs<ButtonProps>(({ type, isDarkMode }) => {
  return { type: type ?? "button", isDarkMode };
})<ButtonProps>`
  padding-block: 1rem;
  border: 0px;
  border-radius: 2rem;
  background: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.gray : theme.colors.lightorange};
`;

const Text = styled.span<ButtonProps>`
  padding: 0.7rem 1.5rem;
  border-radius: 3rem;

  :first-child {
    background: ${({ theme, isDarkMode }) => !isDarkMode && theme.colors.white};
    color: ${({ theme, isDarkMode }) =>
      !isDarkMode ? theme.colors.black : theme.colors.white};
  }
  :last-child {
    background: ${({ theme, isDarkMode }) => isDarkMode && theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
