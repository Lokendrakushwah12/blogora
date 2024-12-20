import Editor from "@/components/editor/editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { JSONContent as TiptapJSONContent } from "@tiptap/core";
import { useEffect, useState } from "react";

export const defaultValue: TiptapJSONContent = {
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
  const [content, setContent] = useState<TiptapJSONContent>(defaultValue);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const savedTitle = localStorage.getItem("title");
    const savedContent = localStorage.getItem("content");

    if (savedTitle) setTitle(savedTitle);
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent) as TiptapJSONContent;
        setContent(parsedContent);
      } catch (e) {
        console.error("Failed to parse saved content", e);
        setContent(defaultValue);
      }
    }
  }, []);

  useEffect(() => {
    if (title) localStorage.setItem("title", title);
    if (content) localStorage.setItem("content", JSON.stringify(content));
  }, [title, content]);

  async function handleSubmit() {
    setPending(true);
    // const result = await createBlogAction({ title, slug, content })
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
      <Editor
        initialValue={defaultValue}
        onChange={(content: TiptapJSONContent) => setContent(content)}
      />
      <Button onClick={handleSubmit} disabled={pending}>
        {pending ? "Submitting..." : "Create"}
      </Button>
    </div>
  );
}
