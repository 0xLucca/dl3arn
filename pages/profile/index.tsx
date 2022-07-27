import PrivateRoute from "components/PrivateRoute";
import { useUser } from "context/firebase";
import { User } from "firebase/auth";
import Image from "next/image";

const defaults: Partial<User> = { photoURL: "https://picsum.photos/1920/1080" };

function Profile() {
  const { user, isLoading } = useUser();

  const { email, photoURL } = user ? user : defaults;

  return (
    <PrivateRoute>
      <div style={{ padding: "5rem 0 0 0" }}>
        <h2>{email}</h2>
        {defaults.photoURL && (
          <div>
            <Image
              width={300}
              height={300}
              layout="responsive"
              src={defaults.photoURL}
              alt=""
            />
          </div>
        )}
      </div>
    </PrivateRoute>
  );
}

export default Profile;
