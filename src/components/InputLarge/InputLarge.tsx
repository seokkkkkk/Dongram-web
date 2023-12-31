import { useCallback } from "react";
import {
  PageContainer,
  MainText,
  Border,
  InputStyled,
} from "./InputLarge.styled";

interface Input {
  text: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function InputLarge({ text, placeholder, onChange, onKeyDown }: Input) {
  const changeCallback = useCallback(onChange, [onChange]);
  return (
    <PageContainer>
      <MainText>{text}</MainText>
      <Border>
        <InputStyled
          type="text"
          placeholder={placeholder}
          onChange={changeCallback}
          onKeyDown={onKeyDown}
        />
      </Border>
    </PageContainer>
  );
}
