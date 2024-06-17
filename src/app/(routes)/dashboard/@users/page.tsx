import { getFirestoreCollections } from "@/services/firebase/firestore-docs";
import { UsersTable } from "@/components/dashboard-components/users-table";
import { UserProps } from "@/types";
import {
  Users,
  columns,
} from "@/components/dashboard-components/users-columns";

async function getData(): Promise<UserProps[]> {
  const users: UserProps[] = await getFirestoreCollections("users");
  return users;
}

export default async function Users() {
  const users = await getData();

  return (
    <div className="my-3">
      <div className="h-full my-5">
        <UsersTable columns={columns} data={users} />
      </div>
    </div>
  );
}
