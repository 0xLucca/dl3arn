import { getAuth } from "firebase/auth";

import { app } from "services/firebase";

const auth = getAuth(app);

export default auth;
