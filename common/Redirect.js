import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Redirect = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to, router]);

  return null; // The component doesn't render anything
};

export default Redirect;
