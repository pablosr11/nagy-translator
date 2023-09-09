"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Text must be at least 3 characters.",
    })
    .max(500, {
      message: "Bio must be at most 500 characters.",
    }),
});

export function TextareaForm({
  name,
  placeholder,
  setAnswer,
}: {
  name: string;
  placeholder: string;
  setAnswer: (answer: string) => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // post request to /api/one
    const response = await fetch("/api/one", {
      method: "POST",
      body: JSON.stringify({
        question: data.name,
      }),
    });
    // stream response body as json
    const json = await response.json();
    setAnswer(json);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 mx-auto text-center space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">{name}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={placeholder}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
