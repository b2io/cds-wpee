import { FC } from "react";
import Image from "next/image";

export const Header: FC = () => (
  <header className="p-3 flex items-center gap-4 bg-gray-900">
    <Image alt="WPEE Logo" height="40" width="40" src="/WPEE-logo.svg" />
    <h1 className="text-white text-lg">
      Western Pennsylvania Electrical Employees
    </h1>
  </header>
);
