import { DocumentIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { FC } from "react";

import { links } from "../data/links";

export const LinkList: FC = () => (
  <div className="bg-white max-w-screen-2xl mx-auto">
    <div className="py-8 sm:grid sm:grid-cols-2 sm:gap-12 px-6 2xl:px-0">
      <h2 className="font-medium text-gray-500 max-w-prose mb-8">
        All insurance related questions including Hospital, Emergency
        Department, Medical/Surgical, Major Medical, Dental and vision;
        Pensioners Dental and Optical claims please call W.P.E.E. Insurance
        Trust Fund 412-432-1130 or Toll Free 1-800-382-1428.
      </h2>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 ">
        <ul
          role="list"
          className="border border-gray-200 rounded-md divide-y divide-gray-200"
        >
          {links.map((link, index) => (
            <a
              className="pl-3 pr-4 py-3 flex items-center justify-between text-sm hover:bg-gray-100 transition"
              href={link.href}
              key={index}
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className="w-0 flex-1 flex items-center">
                {link.isFile ? (
                  <DocumentIcon
                    className="flex-shrink-0 h-5 w-5 text-red-600"
                    aria-hidden="true"
                  />
                ) : (
                  <ExternalLinkIcon
                    className="flex-shrink-0 h-5 w-5 text-red-600"
                    aria-hidden="true"
                  />
                )}
                <span className="ml-2 flex-1 w-0 truncate">{link.name}</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a className="font-medium text-red-600 hover:text-red-900">
                  {link.isFile ? "Download" : "View"}
                </a>
              </div>
            </a>
          ))}
        </ul>
      </dd>
    </div>
  </div>
);
