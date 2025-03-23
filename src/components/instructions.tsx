import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function Instructions() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">
            <Info size={12} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-center">
            Easily search, add or remove cities from the list <br /> just by
            selecting or unselecting them.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
