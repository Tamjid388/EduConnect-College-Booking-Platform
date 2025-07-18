import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Search from "./Search";

export const SearchColleges = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/colleges`, {
    cache: "force-cache",
    next: { revalidate: 30 },
  });
  const colleges = await res.json();
  return (
    <div>
      <Search colleges={colleges}/>
    </div>
  );
};
