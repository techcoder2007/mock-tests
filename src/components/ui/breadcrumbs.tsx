"use client";
import React from "react";

import { linkProps } from "@/constants/bredcrumbs-pathnames";

interface BreadcrumbProps {
  links: linkProps[];
}

export function Breadcrumbs(props: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse max-sm:flex-wrap max-sm:items-start max-sm:gap-y-2">
        {props.links.map((link) => (
          <li key={link.label} className="flex items-center">
            <a
              href={link.href}
              className="inline-flex text-base items-center gap-2 font-bold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              {link.children}
              {link.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

Breadcrumbs.displayName = "Breadcrumbs";