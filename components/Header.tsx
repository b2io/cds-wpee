import { FC } from "react";
import Image from "next/image";

export const Header: FC = () => (
  <header className="py-3 px-6 bg-gray-100 border-b border-gray-300">
    <div className=" flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">
      <div className="flex gap-4">
        <Image
          alt="WPEE Logo"
          height="40"
          width="40"
          src="/ibew_local5-logo_with-tm.png"
        />
        <Image
          alt="IBEW Local 5 Logo"
          height="40"
          width="60"
          src="/wpaneca-2020-smaller_3.png"
        />
      </div>
      <h1 className="text-lg hidden sm:block">
        Western Pennsylvania Electrical Employees
      </h1>
    </div>
  </header>
);
