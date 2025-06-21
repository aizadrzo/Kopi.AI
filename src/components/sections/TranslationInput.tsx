"use client";

import * as React from "react";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "../ui/button";
import { CheckIcon, ChevronDown, WandSparkles } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { languages } from "@/lib/constant";

export function TranslationInput() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1">
      <ChatInput
        placeholder="Type your message here..."
        className="min-h-15 rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
      />
      <div className="flex items-center p-3 pt-0">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost">
              {value
                ? languages.find((lang) => lang.value === value)?.label
                : "Select language..."}
              <ChevronDown className="size-4" />
              <span className="sr-only">Choose a language</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search languages..." />
              <CommandList>
                <CommandEmpty>No language found.</CommandEmpty>
                <CommandGroup>
                  {languages.map((lang) => (
                    <CommandItem
                      key={lang.value}
                      value={lang.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === lang.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {lang.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Button size="lg" className="ml-auto gap-1.5 cursor-pointer">
          <WandSparkles className="size-3.5" />
          Translate
        </Button>
      </div>
    </div>
  );
}
