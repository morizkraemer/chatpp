import { PropsWithChildren } from "react";

import "@/styles/globals.css";
import SideBar from "@/components/SideBar";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex ">
      <div className="h-screen w-2/12">
        <SideBar />
      </div>
      <div className="h-screen w-10/12 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
