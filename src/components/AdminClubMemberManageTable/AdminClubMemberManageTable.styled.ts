import styled from "@emotion/styled";

export const ClubName = styled.div`
  font-size: 3.6rem;
`;
export const Table = styled.div`
  margin-top: 2.1rem;
  z-index: auto;
  width: 58rem;
`;

export const TableContent = styled.div`
  border-bottom: 0.5px solid #959a9f;
`;
export const TableRow = styled.div<{ clicked?: boolean }>`
  display: flex;
  align-items: center;
  height: 4.6rem;
  border: 0.5px solid #959a9f;
  border-bottom: none;
  flex-wrap: nowrap;
  cursor: pointer;
  color: ${(props) => (props.clicked ? "white" : "black")};
  background: ${(props) => (props.clicked ? "#0090f9" : "white")};
`;
export const TableText = styled.div<{ isId?: boolean }>`
  font-size: 1.8rem;
  line-height: 110%;
  flex: ${(props) => (props.isId ? 0.5 : 1)};
  text-align: center;
`;
export const TableTitle = styled.div`
  display: flex;
  align-items: center;
  height: 4.6rem;
  background: #dde1e6;
  margin-bottom: 2.15rem;
  justify-content: space-around;
  gap: 4.8rem;
`;
export const TitleRow = styled.div`
  font-size: 1.8rem;
  line-height: 110%;
  text-align: center;
  justify-content: space-around;
  gap: 4.8rem;
`;
export const PageTab = styled.div`
  margin-top: 15.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.6rem;
`;
export const NumberButton = styled.button`
  display: flex;
  justify-content: center;
  height: 4rem;
  width: 4.2rem;
  padding: 0.8rem;
  color: #0f62fe;
`;
export const ActiveNumberButton = styled(NumberButton)`
  font-weight: 500;
  background-color: #a6c8ff;
  color: #001d6c;
`;
export const ShiftButton = styled.button`
  color: #0f62fe;
  height: 4rem;
  padding: 0.8rem;
`;
export const DisabledShiftButton = styled(ShiftButton)`
  color: #697077;
  cursor: default;
`;

export const Container = styled.div``;
