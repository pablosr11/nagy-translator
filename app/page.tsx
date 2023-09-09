"use client";
import { TextareaForm } from "@/components/textareaform";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState<any>(null);

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <TextareaForm
          name="Magyar<->Deustch"
          placeholder="Kezdj el írni a fordításhoz"
          setAnswer={setAnswer}
        />
      </div>
      <ScrollArea className="h-[300px] w-[300px] lg:w-[800px] lg:h-[300px]  my-3 px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-slate-100 rounded-md p-4">
        {/* show translation if its not undefined and answer its not empty string */}
        {answer && (
          <div className="text-center grid grid-cols-2 gap-4">
            <div className="text-left">
              <h1 className="text-md font-bold">Translation</h1>
              <p className="text-md">{answer.translation.hungarian}</p>
              <h1 className="text-md font-bold">Example</h1>
              <p className="text-md">{answer.example.hungarian}</p>
              <h1 className="text-md font-bold">Reply</h1>
              <p className="text-md">{answer.reply.hungarian}</p>
            </div>
            <div className="text-left">
              <h1 className="text-md font-bold">Translation</h1>
              <p className="text-md">{answer.translation.german}</p>
              <h1 className="text-md font-bold">Example</h1>
              <p className="text-md">{answer.example.german}</p>
              <h1 className="text-md font-bold">Reply</h1>
              <p className="text-md">{answer.reply.german}</p>
            </div>
          </div>
        )}
      </ScrollArea>
    </section>
  );
}
