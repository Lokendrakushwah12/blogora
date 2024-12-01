"use client";

import { useEffect, useState } from "react";
// import { createBlogAction } from '@/lib/actions'

import Editor from "@/components/editor/editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [],
    },
  ],
};

export default function ContentForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<any>("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const savedTitle = localStorage.getItem("title");
    const savedContent = localStorage.getItem("content");

    if (savedTitle) setTitle(savedTitle);
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(parsedContent); // Set content as an object
      } catch (e) {
        console.error("Failed to parse saved content", e);
        setContent(defaultValue); // Default value in case of error
      }
    }
  }, []);

  useEffect(() => {
    if (title) localStorage.setItem("title", title);
    if (content) localStorage.setItem("content", JSON.stringify(content));
  }, [title, content]);

  useEffect(() => {
    const name = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }, [title]);

  async function handleSubmit() {
    // TODO: validate the data

    setPending(true);

    // const result = await createBlogAction({ title, slug, content })

    // if (result?.error) {
    //   toast.error(result.error)
    // }

    setPending(false);
  }

  return (
    <div className="my-6 flex w-full max-w-3xl flex-col gap-4 px-4">
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Story Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-full w-full overflow-visible border-0 bg-transparent p-0 text-4xl font-semibold focus-visible:ring-0"
        />
      </div>

      <Editor initialValue={defaultValue} onChange={setContent} />
      <Button onClick={handleSubmit} disabled={pending}>
        {pending ? "Submitting..." : "Create"}
      </Button>
    </div>
  );
}
