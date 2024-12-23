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
    <Link
      href={`/feed/${slug}`}
      as={`/feed/${title.toLowerCase().replace(/\s/g, "-")}`}
    >
      <div className="flex h-full w-full flex-col items-start justify-start gap-2 sm:flex-row">
        <div className="size-full min-h-[150px] overflow-hidden rounded-lg bg-muted/20 sm:max-w-[280px]">
          <div className="size-full"></div>
        </div>
        <div className="gap- flex h-full w-full flex-col items-start justify-between gap-2">
          <div className="flex flex-col">
            <h3 className="line-clamp-1 text-2xl font-semibold">{title}</h3>
            <p className="line-clamp-3 text-base font-normal text-muted-foreground">
              {description}
            </p>
          </div>
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
