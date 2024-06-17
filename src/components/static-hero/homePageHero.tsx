import { TextGenerateEffect } from "@/components/animations/text-generate-effect";

let words =
  " Free IELTS Speaking Test: Prepare with IELTS Speaking Topics and Templates for IELTS Speaking Part 1, 2, & 3";

export function HomePageHero() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center flex-col max-sm:h-[30rem]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-3xl sm:text-7xl font-bold relative z-20 w-[85%] max-sm:w-full mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 px-4 text-center max-sm:px-2">
        Test Your English Any Time Any Where
      </p>
      <div className="font-bold px-4 mx-auto">
        <TextGenerateEffect
          words={words}
          className="text-xl text-center max-sm:text-sm max-sm:text-center max-sm:w-full"
        />
      </div>
    </div>
  );
}
