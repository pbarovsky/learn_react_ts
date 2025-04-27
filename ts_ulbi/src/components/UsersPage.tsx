import { FC, useState, useEffect } from "react";
import List from "./List";
import { UserItem } from "./UserItem";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  const FetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  return (
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={(user) => {
              navigate(`/users/${user.id}`);
            }}
            user={user}
            key={user.id}
          />
        )}
      />
    </>
  );
};
