import { AdminHeader } from "@/components/AdminHeader/AdminHeader";
import { UserManageTable } from "@/components/UserManageTable/UserManageTable";
import { UserInfo } from "@components/UserInfo/UserInfo";

import styled from "@emotion/styled";
import { useState, useCallback } from "react";

const UserTab = styled.div`
  margin-top: 6.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Admin = styled.div``;

export default function AdminPage() {
  const [ClickedId, setClickedId] = useState("1");
  const HandleClicked = useCallback((id: string) => {
    setClickedId(id);
  }, []);
  return (
    <Admin>
      <AdminHeader />
      <UserTab>
        <UserManageTable ParentClickedId={HandleClicked} />
        <UserInfo ClickedId={ClickedId} />
      </UserTab>
    </Admin>
  );
}
