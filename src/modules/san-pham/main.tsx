"use client";

import Section01 from "./components/section-01/section-01";
import SectionHeader from "./components/section-header";

export default function ProductContent({
  viewFilter,
}: {
  viewFilter: boolean;
}) {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <SectionHeader />
        <div className="w-full pb-10">
          <Section01 viewFilter={viewFilter} />
        </div>
      </div>
    </main>
  );
}
