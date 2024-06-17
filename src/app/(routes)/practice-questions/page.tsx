import React from "react";
import dynamic from "next/dynamic";
import { Stepper } from "@/components/mocks-components/stepper-question";
import { getDocumentById } from "@/server-actions/actions";
import PracticeQuestionList from "@/components/mocks-components/practiceQuestionsLists";

const CheckMicrophoneWorking = dynamic(
  () => import("@/components/mocks-components/checkMicrophoneWorking"),
  {
    ssr: false,
  }
);

type IPracticeQuestionDetails = {
  searchParams: {
    questionId?: string;
  };
};

export default async function PracticeQuestionDetails({
  searchParams,
}: IPracticeQuestionDetails) {
  const data = await getDocumentById(
    "mock_tests",
    String(searchParams?.questionId)
  );

  return (
    <section className="practice-question-details">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[50rem]">
          <div className="flex items-center justify-between gap-5 max-lg:flex-wrap">
            <Stepper />
            <CheckMicrophoneWorking />
          </div>
          <PracticeQuestionList questions={data?.part_one}/>
        </div>
      </div>
    </section>
  );
}
