/* This example requires Tailwind CSS v2.0+ */
import { DocumentIcon } from "@heroicons/react/outline";
import { FC } from "react";

import { files } from "../data/files";

export const FileList: FC = () => (
  <div className="bg-white ">
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <h2 className="font-medium text-gray-500">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </h2>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <ul
          role="list"
          className="border border-gray-200 rounded-md divide-y divide-gray-200">
          {files.map((file, index) => (
            <li
              key={index}
              className="pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-gray-100 transition">
              <div className="w-0 flex-1 flex items-center">
                <DocumentIcon
                  className="flex-shrink-0 h-5 w-5 text-red-600"
                  aria-hidden="true"
                />
                <span className="ml-2 flex-1 w-0 truncate">{file.name}</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a
                  className="font-medium text-red-600 hover:text-red-900"
                  href={file.href}
                  target="_blank"
                  rel="noreferrer noopener">
                  Download
                </a>
              </div>
            </li>
          ))}
        </ul>
      </dd>
    </div>
  </div>
);
