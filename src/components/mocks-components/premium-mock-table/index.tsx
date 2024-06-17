import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function PremiumQuestionTable() {
  return (
    <div className="my-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Take a practice test</CardTitle>
        </CardHeader>
        <Separator className="my-2"/>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-light">Practice as much as you want.</p>
              <Button variant="outline" className="my-3 bg-slate-100 dark:bg-black">Practice Questions</Button>
            </div>
            <Image
              src="/svgs/practise-questions/practice-tests.svg"
              alt="test"
              width={220}
              height={220}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
