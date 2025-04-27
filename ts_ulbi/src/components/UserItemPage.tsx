import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams {
  [key: string]: string | undefined;
}

export const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  const FetchUser = async () => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    FetchUser();
  }, []);

  return (
    <>
      <button onClick={() => navigate("/users")}>Go back</button>
      <h1>{user?.name}</h1>
      <div>
        {user?.email}
        {user?.address.city}
      </div>
    </>
  );
};
