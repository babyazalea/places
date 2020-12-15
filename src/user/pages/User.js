import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "ty",
      image:
        "https://www.mpps.co.kr/kfcs_api_img/KFCS/goods/DL_2173961_20200525160713616.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
