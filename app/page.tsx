import { TextareaForm } from "@/components/textareaform";

export default function Home() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-4 lg:grid-cols-2">
          <TextareaForm
            name="Magyar Nyelv"
            placeholder="Kezdj el írni a fordításhoz"
          />
          <TextareaForm
            name="Deutsch"
            placeholder="Beginnen Sie mit dem Schreiben, um zu übersetzen"
          />
        </div>
      </div>
    </section>
  );
}
