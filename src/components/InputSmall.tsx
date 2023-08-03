//styeld완료
import styled from "@emotion/styled";

const PageContainer = styled.div`
  margin-left: 4rem;
  margin-bottom: 10px;
`;
const Text = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;
const Border = styled.div`
  width: 24.4rem;
  height: 4.8rem;
  background-color: #f2f4f8;
  border-bottom: 0.1rem solid #c1c7cd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputText = styled.input`
  width: 21.2rem;
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

export function InputSmall({ text, placeholder, onChange }: Input) {
  return (
    <PageContainer>
      <Text>{text}</Text>
      <Border>
        <InputText type="text" placeholder={placeholder} onChange={onChange} />
      </Border>
    </PageContainer>
  );
}
