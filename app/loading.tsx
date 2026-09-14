import React from "react";
import { Loader } from "@/app/components/ui/Loader";

export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <Loader size="lg" />
    </div>
  );
}
