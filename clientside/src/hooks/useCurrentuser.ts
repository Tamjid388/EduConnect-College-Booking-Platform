import { useState, useEffect } from "react";

type User = {
  email: string;
  role: string;
  // add other user fields you expect here
};

const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {  
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
          credentials: "include",
        });
        if (!res.ok) {
          setUser(null);
        } else {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useCurrentUser;


// export const useCurrentMe = () => {
//   const [user, setUser] = useState(null); // Store user data
//   const [loading, setLoading] = useState(true); // Track loading
//   const [error, setError] = useState(null); // Track error

//   useEffect(() => {
//     const fetchMe = async () => {
//       try {
//         const response = await fetch("/api/v1/me", {
//           method: "GET",
//           credentials: "include", // Send cookies
//         });

//         if (!response.ok) {
//           throw new Error("Failed to authenticate");
//         }

//         const data = await response.json();
//         setUser(data.user);
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMe();
//   }, []);

//   return { user, loading, error };
// };