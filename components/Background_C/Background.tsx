import React from "react";

export default function Background() {
  return (
    <section>
      <div
        className="hidden dark:block absolute
      w-[100%] h-[100%] -translate-x-[50%] -z-10
      overflow-hidden brightness-50 blur-3xl">
        <img src="bg_dark.jpg" alt="background"></img>
      </div>
      <div
        className="block dark:hidden absolute
      w-[100%] h-[100%] -translate-x-[50%] -z-10
      overflow-hidden brightness-100 blur-3xl">
        <img src="bg_light.png" alt="background"></img>
      </div>
    </section>
  );
}
