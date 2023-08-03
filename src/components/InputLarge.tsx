//styled완료
import { useCallback } from "react";
import styled from "@emotion/styled";

const PgaeContainer = styled.div`
  margin-left: 4rem;
  margin-bottom: 10px;
`;

const MainText = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;
const Border = styled.div`
  width: 52rem;
  height: 4.8rem;
  background-color: #f2f4f8;
  border-bottom: 0.1rem solid #c1c7cd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputStyled = styled.input`
  width: 48.8rem;
  height: 2.2rem;
  font-size: 1.6rem;
  background-color: transparent;
  outline: none;
`;

interface Input {
  text: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputLarge({ text, placeholder, onChange }: Input) {
  const changeCallback = useCallback(onChange, [onChange]);
  return (
    <PgaeContainer>
      <MainText>{text}</MainText>
      <Border>
        <InputStyled
          type="text"
          placeholder={placeholder}
          onChange={changeCallback}
        />
      </Border>
    </PgaeContainer>
  );
}
