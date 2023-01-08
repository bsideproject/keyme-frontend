export const dateFormatter = (day: Date): string => {
  return (
    day.getFullYear().toString() +
    "-" +
    (day.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    day.getDate().toString().padStart(2, "0")
  );
};
