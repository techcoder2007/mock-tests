import React from "react";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { pathnames } from "@/constants/bredcrumbs-pathnames";
import { HomePageHero } from "@/components/static-hero/homePageHero";

export default function Home() {
  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto px-4 my-5">
        <Breadcrumbs links={pathnames} />
      </div>
      <div className="px-6">
        <HomePageHero />
      </div>
    </React.Fragment>
  );
}
