import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { pathnames } from "@/constants/bredcrumbs-pathnames";
import { getFirestoreCollections } from "@/services/firebase/firestore-docs";
import { SparklesCore } from "@/components/animations/sparkles";
import dynamic from "next/dynamic";

const PracticeTestTable = dynamic(
  () => import("@/components/mocks-components/practice-test-table"),
  {
    ssr: false,
  }
);

export default async function MockSpeakingPage() {
  const practiseTests = await getFirestoreCollections("mock_tests");

  return (
    <section className="mock-speaking-page">
      <div className="max-w-7xl mx-auto px-4">
        <div className="my-4">
          <Breadcrumbs links={pathnames} />
        </div>
      </div>
      <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="text-3xl max-sm:text-xl font-bold text-center text-white relative z-20 capitalize px-2">
          This page provides you with various IELTS practice tests and materials
          to help you enhance your timing and technique before taking the
          official IELTS test.
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <PracticeTestTable data={practiseTests} />
      </div>
    </section>
  );
}
