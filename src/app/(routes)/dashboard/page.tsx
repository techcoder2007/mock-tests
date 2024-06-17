import DropzoneClient from "@/components/dashboard-components/dropzoneForClient";
import { DashboardHero } from "@/components/static-hero/dashboard-hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { dashboardPathNames } from "@/constants/bredcrumbs-pathnames";

export default function DashboardPage() {
  return (
    <section className="dashboard">
      <div className="max-w-7xl mx-auto px-4">
        <div className="my-3">
          <Breadcrumbs links={dashboardPathNames} />
        </div>
      </div>
      <DashboardHero />
      <div className="max-w-7xl px-4 mx-auto">
        <DropzoneClient />
      </div>
    </section>
  );
}
