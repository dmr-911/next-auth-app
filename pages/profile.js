import { getSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  return <div>Profile</div>;
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Profile;
