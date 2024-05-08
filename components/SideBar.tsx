import Image from "next/image";
import Link from "next/link";
import UserAvatar from "./UserAvatar";
export default function SideBar() {
  return (
    <div className="h-full w-full py-12 flex flex-col justify-between items-center bg-violet-950 text-white ">
      <div className="flex flex-col items-center gap-5">
        <UserAvatar />
        <Link href="profile" className="text-2xl font-bold">
          Profile
        </Link>
        <Link href="chat" className="text-2xl font-bold">
          Chat
        </Link>
      </div>
      <Link href="/logout" className="text-xl font-thin">
        logout
      </Link>
    </div>
  );
}
