"use client";

import Section01 from "./components/section-01/section-01";
import SectionHeader from "./components/section-header";

export default function ProductContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <SectionHeader />
        <div className="w-full py-12">
          <Section01 />
        </div>
      </div>
    </main>
  );
}
