import { useState } from "react";

function useToggle(initialvalue = false) {
  const [value, setValue] = useState(initialvalue);

  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

export default useToggle;
