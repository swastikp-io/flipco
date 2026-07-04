import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ServiceSelect({ value, onValueChange }: { value?: string, onValueChange?: (value: string) => void }) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full bg-poch-black border-poch-white/20 rounded-xl px-6 py-[1.75rem] font-inter text-lg hover:border-poch-white/40 focus:ring-1 focus:ring-poch-white/50 transition-colors text-poch-white/70">
        <SelectValue placeholder="Select Service..." />
      </SelectTrigger>
      <SelectContent className="bg-poch-black text-white border-poch-white/20 rounded-xl shadow-xl overflow-hidden font-inter text-lg">
        <SelectItem value="communication" className="cursor-pointer py-2.5 focus:bg-blue-600 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white">
          Communication & Customer Engagement
        </SelectItem>
        <SelectItem value="sales" className="cursor-pointer py-2.5 focus:bg-blue-600 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white">
          Sales & Lead Management
        </SelectItem>
        <SelectItem value="content" className="cursor-pointer py-2.5 focus:bg-blue-600 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white">
          Content & Marketing
        </SelectItem>
        <SelectItem value="operations" className="cursor-pointer py-2.5 focus:bg-blue-600 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white">
          Operations & Backend Automation
        </SelectItem>
        <SelectItem value="document" className="cursor-pointer py-2.5 focus:bg-blue-600 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white">
          Document & Compliance
        </SelectItem>
        <SelectItem value="industry" className="cursor-pointer py-2.5 focus:bg-blue-600 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white">
          Industry-Specific Solutions
        </SelectItem>
        <SelectItem value="other" className="cursor-pointer py-2.5 focus:bg-blue-600 focus:text-white data-[state=checked]:bg-blue-600 data-[state=checked]:text-white">
          Other / Not sure
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
