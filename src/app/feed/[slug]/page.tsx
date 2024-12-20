import { Calendar, TimerIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 py-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-4xl font-bold">My new Story: First time</h1>
        </div>
        <div className="flex items-start justify-start gap-4">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-1">
              <TimerIcon
                strokeWidth={1.5}
                size={18}
                className="text-muted-foreground"
              />
              <span className="text-sm font-normal text-muted-foreground">
                3 min read
              </span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Calendar
                strokeWidth={1.5}
                size={16}
                className="text-muted-foreground"
              />
              <span className="text-sm font-normal text-muted-foreground">
                20/12/2024
              </span>
            </div>
          </div>
        </div>
        <div className="size-full h-[220px] w-full overflow-hidden rounded-lg bg-muted/20">
          <div className="size-full"></div>
        </div>
      </div>
      <p className="text-base font-normal text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam
        deleniti. Voluptatibus tempora sunt officia, ullam soluta laboriosam
        corporis reprehenderit!
      </p>
      <p className="text-base font-normal text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam
        deleniti. Voluptatibus tempora sunt officia, ullam soluta laboriosam
        corporis reprehenderit! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Alias, delectus? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Possimus, dolorem. Neque perferendis nulla
        veritatis quo deleniti, ipsa quisquam earum fugit autem beatae
        necessitatibus cum delectus impedit aliquam quam eligendi numquam.
      </p>
      <p className="text-base font-normal text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam
        deleniti. Voluptatibus tempora sunt officia, ullam soluta laboriosam
        corporis reprehenderit!
      </p>
      <p className="text-base font-normal text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam
        deleniti. Voluptatibus tempora sunt officia, ullam soluta laboriosam
        corporis reprehenderit! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Alias, delectus?
      </p>
    </div>
  );
};

export default page;
