"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MocksResponse } from "@/types";
import { AnimationButton } from "@/components/animations/shimmer-button";
import { PlayIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

interface PracticeTestTableProps {
  data: MocksResponse[];
}

export default function PracticeTestTable(props: PracticeTestTableProps) {
  const router = useRouter();

  const rows = props.data.map((item, index) => {
    return (
      <TableRow key={item.id} className="w-full">
        <TableCell className="font-bold text-base">
          Module {String(index + 1)}
        </TableCell>
        <TableCell className="text-center">
          <div className="flex flex-col items-center justify-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-scroll"
            >
              <path
                d="M7.4986 0C6.3257 0 5.36107 0.38943 4.73753 1.19361C4.23745 1.83856 4 2.68242 4 3.63325H5C5 2.84313 5.19691 2.23312 5.5278 1.80636C5.91615 1.30552 6.55152 1 7.4986 1C8.35683 1 8.96336 1.26502 9.35846 1.68623C9.75793 2.11211 10 2.76044 10 3.63601V6H3C2.44772 6 2 6.44772 2 7V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V7C13 6.44771 12.5523 6 12 6H11V3.63601C11 2.58135 10.7065 1.66167 10.0878 1.0021C9.46477 0.337871 8.57061 0 7.4986 0ZM3 7H12V13H3V7Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </TableCell>
        <TableCell className="text-right">
          <AnimationButton
            className="text-sm font-bold text-white"
            onClick={() =>
              router.push(`/practice-questions/?questionId=${item.id}`)
            }
          >
            Submit
            <PlayIcon className="ml-2 h-4 w-4" />
          </AnimationButton>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div className="practise-tests my-10">
      <div className="min-w-full sm:min-w-0 mx-auto px-4">
        <Table className="text-base w-full max-sm:w-[500px]">
          <TableCaption className="font-bold font-mono">
            A list of practice mock tests
          </TableCaption>
          <TableHeader>
            <TableRow className="w-full">
              <TableHead className="text-left font-bold">
                Mock Test Modules
              </TableHead>
              <TableHead className="text-center font-bold">
                Practice Test
              </TableHead>
              <TableHead className="text-right font-bold">
                Submissions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{rows}</TableBody>
        </Table>
      </div>
    </div>
  );
}
