import { useSession } from "next-auth/react";
import useCurrentUser from "./useCurrentuser";
 // your custom hook for JWT cookie login

const useUnifiedUser = () => {
  const { data: session, status } = useSession();
  const { user: customUser, loading: customLoading } = useCurrentUser();

  // If NextAuth session is active, prioritize that (Google login)
  if (status === "loading" || customLoading) {
    return { user: null, loading: true };
  }

  if (session?.user) {
    return { user: session.user, loading: false, source: "nextauth" };
  }

  if (customUser) {
    return { user: customUser, loading: false, source: "custom" };
  }

  return { user: null, loading: false };
};

export default useUnifiedUser;
