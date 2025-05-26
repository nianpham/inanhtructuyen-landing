"use client";

import Section1 from "./components/section-01/section-01";
import Section2 from "./components/section-02/section-02";
import Section3 from "./components/section-03/section-03";
import Section4 from "./components/section-04/section-04";
import Section5 from "./components/section-05/section-05";
import Section6 from "./components/section-06/section-06";
import Section7 from "./components/section-07/section-07";

export default function HomeContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full py-0">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </div>
      </div>
    </main>
  );
}
