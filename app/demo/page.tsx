"use client";

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        data-testid="btn"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className="p-2 w-20 bg-white rounded-full text-black"
      >
        {count}
      </button>
    </div>
  );
};

export default Page;
