import { Calendar, TimerIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  readTime: string;
  date: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  readTime,
  date,
  slug,
}) => {
  return (
    <Link href={`/feed/${slug}`} as={`/feed/${title.toLowerCase().replace(/\s/g, "-")}`}>
      <div className="flex h-[160px] w-full items-start justify-start gap-2 rounded-xl bg-muted/20 p-2">
        <div className="size-full w-[400px] overflow-hidden rounded-lg bg-muted/50">
          <div className="size-full"></div>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-between gap-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-base font-normal text-muted-foreground">
            {description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-1">
              <TimerIcon
                strokeWidth={1.5}
                size={18}
                className="text-muted-foreground"
              />
              <span className="text-sm font-normal text-muted-foreground">
                {readTime}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Calendar
                strokeWidth={1.5}
                size={16}
                className="text-muted-foreground"
              />
              <span className="text-sm font-normal text-muted-foreground">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
