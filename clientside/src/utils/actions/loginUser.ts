

import { LoginData } from "@/app/(auth)/login/page";
import { UserData } from "@/app/(auth)/register/page";

export const loginUser = async (data: LoginData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials:"include",
    body: JSON.stringify(data),
    
  });

  const userInfo = await res.json();
  return userInfo;
};