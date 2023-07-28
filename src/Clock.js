import { useEffect, useState } from "react";

const Clock = ({ time }) => {
  const [night, setnight] = useState(false);

  useEffect(() => {
    let hours = time.getHours();
    setnight(hours >= 0 && hours <= 6);
  }, [time]);

  return (
    <h1 className={night ? "night" : "day"}>{time.toLocaleTimeString()}</h1>
  );
};
export default Clock;
