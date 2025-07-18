import React, { useMemo, useState } from "react";

export function ExpensiveCalc() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  // Expensive calc
  const squared = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div className="p-4">
      <h3>useMemo Example</h3>
      <p>
        Square of {number} is: {squared}
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="p-2 bg-blue-600 text-white mt-4"
      >
        Re-render ({count})
      </button>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
    </div>
  );
}
