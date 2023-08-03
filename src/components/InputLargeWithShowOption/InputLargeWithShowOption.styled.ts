import styled from "@emotion/styled";
import Image from "next/image";

export const PageContainer = styled.div`
  margin-left: 4rem;
  margin-bottom: 30px;
`;
export const TextShowing = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;
export const Border = styled.div`
  width: 52rem;
  height: 4.8rem;
  background-color: #f2f4f8;
  border-bottom: 0.1rem solid #c1c7cd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextInput = styled.input`
  width: 48.8rem;
  height: 2.2rem;
  font-size: 1.6rem;
  margin-left: 1.8rem;
  margin-right: 1.3rem;
  background-color: transparent;
  outline: none;
`;
export const PasswordEyeImage = styled(Image)`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 15px;
`;
