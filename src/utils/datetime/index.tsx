export const dateFormatter = (day: Date): string => {
  return (
    day.getFullYear().toString() +
    "-" +
    (day.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    day.getDate().toString().padStart(2, "0")
  );
};

export const pickerFormmater = (day: Date | undefined): string => {
  if (!day) {
    // 기본값 수정
    return "yyyy.mm.dd";
  }
  return (
    day.getFullYear().toString() +
    ". " +
    (day.getMonth() + 1).toString() +
    ". " +
    day.getDate().toString()
  );
};
