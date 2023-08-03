import FullCircle from "../icons/FullCircle";

export default function Skills({ knowledge }) {
  const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fullCircles = Math.ceil(knowledge / 10);
  const opacity = knowledge / 130;
  return (
    <>
      {circles.map((circle, i) => {
        if (circle <= fullCircles) {
          return (
            <FullCircle width={15} height={15} fill={`rgba(0,0,0,${opacity}`} />
          );
        } else {
          return (
            <FullCircle width={15} height={15} fill={"rgb(209, 219, 237)"} />
          );
        }
      })}
    </>
  );
}
