import { AdminHeader } from "@/components/AdminHeader/AdminHeader";
import { UserManageTable } from "@/components/UserManageTable/UserManageTable";
import { UserInfo } from "@components/UserInfo/UserInfo";
import { ClubManageTable } from "@/components/ClubManageTable/ClubManageTable";
import { ClubInfo } from "@/components/ClubInfo/ClubInfo";

import styled from "@emotion/styled";
import { useState, useCallback } from "react";

const Tab = styled.div`
  margin-top: 6.5rem;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;
const Admin = styled.div`
  margin-bottom: 8rem;
`;

export default function AdminPage() {
  const [ClickedId, setClickedId] = useState("1");
  const HandleClicked = useCallback((id: string) => {
    setClickedId(id);
  }, []);
  const [isUserPage, setIsUserPage] = useState(true);
  const handleTab = useCallback(() => {
    return isUserPage ? (
      <Tab>
        <UserManageTable ParentClickedId={HandleClicked} />
        <UserInfo ClickedId={ClickedId} setClickedId={setClickedId} />
      </Tab>
    ) : (
      <Tab>
        <ClubManageTable ParentClickedId={HandleClicked} />
        <ClubInfo ClickedId={ClickedId} />
      </Tab>
    );
  }, [ClickedId, HandleClicked, isUserPage]);
  return (
    <Admin>
      <AdminHeader isUserPage={isUserPage} setIsUserPage={setIsUserPage} />
      {handleTab()}
    </Admin>
  );
}
