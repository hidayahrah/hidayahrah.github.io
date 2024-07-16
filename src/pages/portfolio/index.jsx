import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Portfolio() {
  const router = useRouter();

  useEffect(() => router.push("/"), []);
  return <></>;
}
