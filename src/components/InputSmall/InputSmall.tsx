import { PageContainer, Text, Border, InputText } from "./InputSmall.styled";

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
