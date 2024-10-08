import { component$ } from "@builder.io/qwik";
import { LuClock } from "@qwikest/icons/lucide";
import { format } from "date-fns";
import { Card } from "~/components/ui";
import type { Event } from "~/lib/types";

export const TimeCard = component$(({ dates }: Pick<Event, "dates">) => {
  return (
    <Card.Root>
      <Card.Content class="py-4">
        <div class="flex  gap-4">
          <LuClock class="my-1 h-5 w-5 flex-none text-muted-foreground" />
          <div class="flex flex-col">
            <span class="text-sm">
              {format(dates[0].startDate, "EEEE, MMMM d, yyyy 'at' h:mm a")} to{" "}
              {format(dates[0].endDate, "EEEE, MMMM d, yyyy 'at' h:mm a")}
            </span>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  );
});
