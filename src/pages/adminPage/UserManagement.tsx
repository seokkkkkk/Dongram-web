import { AdminHeader } from "@/components/AdminHeader/AdminHeader";
import { UserManageTable } from "@/components/UserManageTable/UserManageTable";
import { UserInfo } from "@components/UserInfo/UserInfo";

import styled from "@emotion/styled";

const UserTab = styled.div`
  margin-top: 6.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Admin = styled.div``;

export default function AdminPage() {
  return (
    <Admin>
      <AdminHeader />
      <UserTab>
        <UserManageTable />
        <UserInfo />
      </UserTab>
    </Admin>
  );
}
