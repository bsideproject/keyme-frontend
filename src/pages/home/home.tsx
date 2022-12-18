import React from "react";

import { useUser } from "@hooks/useUser";

function Home() {
  const { user } = useUser();

  return (
    <div>
      <div> name: {user?.name}</div>
      <div> email: {user?.email}</div>
      <div>HOME</div>
    </div>
  );
}

export default Home;
