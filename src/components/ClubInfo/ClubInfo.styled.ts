import Image from "next/image";
import styled from "@emotion/styled";

export const Text = styled.div`
  font-size: 1.8rem;
  line-height: 110%;
`;
export const Text2 = styled(Text)`
  margin-bottom: 1.9rem;
`;
export const Value = styled.input`
  display: flex;
  height: 4.8rem;
  width: 23.1rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid #c1c7cd;
  background: #f2f4f8;
  font-size: 1.6rem;
  line-height: 140%;
  text-align: center;
  outline: none;
`;
export const Admin = styled(Value)`
  width: 9.5rem;
`;
export const Date = styled(Value)`
  width: 18rem;
`;
export const RecruitDate = styled(Value)`
  width: 14.7rem;
`;
export const ClubName = styled(Value)`
  width: 51.5rem;
`;
export const Introduction = styled(Value)`
  width: 51.5rem;
  height: auto;
  align-items: start;
  text-align: start;
`;
export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 51.5rem;
`;
export const ClubCol = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ClubRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;
export const ClubRow2 = styled.div`
  margin-bottom: 3rem;
`;
export const ClubImage = styled(Image)`
  width: 19.6rem;
  height: 22.2rem;
  margin-bottom: 5.6rem;
`;
export const CheckBox = styled.input`
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid #121619;
`;
export const Body = styled.div``;
export const Delete = styled.button`
  width: 8.6rem;
  height: 2.9rem;
  border-radius: 0.3rem;
  border: 2px solid #fe2a2a;
  background: #fe2a2a;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;
export const Buttons = styled.div`
  margin-top: 4.5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
export const CompleteButtons = styled.div``;
export const Cancle = styled.button`
  width: 9.4rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid #dde1e6;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;
export const Save = styled(Cancle)`
  margin-left: 1.3rem;
  border: 1px solid #0090f9;
  background: #0090f9;
  color: white;
`;