

import Link from "next/link";
import { Button } from "../ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  return (
    <footer className="footer border-t pt-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between pt-8 max-sm:flex-col gap-5">
          <div className="logo text-xl uppercase font-bold">
            <Link href="/">
              Multi Level
            </Link>
          </div>
          <div className="information">
            <p className="font-bold text-base leading-10 max-sm:text-sm">
              For Reference +998 91 470 98 02
            </p>
            <p className="font-bold text-base">Created By Abbos Shodmonov</p>
          </div>
          <div className="brands flex items-center gap-4 flex-nowrap md:flex-wrap">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="icon">
                    <PaperPlaneIcon className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Telegram Channal</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button  variant="secondary" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12.91 12.909c.326-.327.582-.72.749-1.151c.16-.414.27-.886.302-1.578c.032-.693.04-.915.04-2.68c0-1.765-.008-1.987-.04-2.68c-.032-.692-.142-1.164-.302-1.578a3.185 3.185 0 0 0-.75-1.151a3.187 3.187 0 0 0-1.151-.75c-.414-.16-.886-.27-1.578-.302C9.487 1.007 9.265 1 7.5 1c-1.765 0-1.987.007-2.68.04c-.692.03-1.164.14-1.578.301a3.2 3.2 0 0 0-1.151.75a3.2 3.2 0 0 0-.75 1.151c-.16.414-.27.886-.302 1.578C1.007 5.513 1 5.735 1 7.5c0 1.765.007 1.987.04 2.68c.03.692.14 1.164.301 1.578c.164.434.42.826.75 1.151c.325.33.718.586 1.151.75c.414.16.886.27 1.578.302c.693.031.915.039 2.68.039c1.765 0 1.987-.008 2.68-.04c.692-.03 1.164-.14 1.578-.301a3.323 3.323 0 0 0 1.151-.75M2 6.735v1.53c-.002.821-.002 1.034.02 1.5c.026.586.058 1.016.156 1.34c.094.312.199.63.543 1.012c.344.383.675.556 1.097.684c.423.127.954.154 1.415.175c.522.024.73.024 1.826.024H8.24c.842.001 1.054.002 1.526-.02c.585-.027 1.015-.059 1.34-.156c.311-.094.629-.2 1.011-.543c.383-.344.556-.676.684-1.098c.127-.422.155-.953.176-1.414C13 9.247 13 9.04 13 7.947v-.89c0-1.096 0-1.303-.023-1.826c-.021-.461-.049-.992-.176-1.414c-.127-.423-.3-.754-.684-1.098c-.383-.344-.7-.449-1.011-.543c-.325-.097-.755-.13-1.34-.156A27.29 27.29 0 0 0 8.24 2H7.057c-1.096 0-1.304 0-1.826.023c-.461.021-.992.049-1.415.176c-.422.128-.753.301-1.097.684c-.344.383-.45.7-.543 1.012c-.098.324-.13.754-.156 1.34c-.022.466-.022.679-.02 1.5M7.5 5.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M4.25 7.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m6.72-2.72a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </footer>
  );
}
