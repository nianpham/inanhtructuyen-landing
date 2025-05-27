import { useId } from "react";

import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Selection() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <SelectNative id={id} defaultValue="">
        <option value="" disabled>
          Default Sorting
        </option>
        <option value="1">Sort by latest</option>
        <option value="2">Sort by Price: Low to High</option>
        <option value="3">Sort by Price: High to Low</option>
      </SelectNative>
    </div>
  );
}
