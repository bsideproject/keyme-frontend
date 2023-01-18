import React from "react";

const useSlider = (
  offsetX: number,
  maxWidth: number,
  value: number,
  setActiveDrag: (param: boolean) => void,
  setValue: (param: number) => void,
  setProgress: (param: number) => void
) => {
  const calPercentage = (x: number, max: number) => {
    if (x < 0) return 0;
    else if (x > max) return 100;
    return Math.round((x / max) * 100);
  };

  const usePercentage = (e: MouseEvent | TouchEvent | any) => {
    let newX = 0;
    if (e.type.includes("mouse")) {
      newX = e.clientX - offsetX;
    } else if (e.type.includes("touch")) {
      // touch up 시 touches가 없음
      newX = e.touches[0].clientX - offsetX;
    }
    const percentage = calPercentage(newX, maxWidth);
    return percentage;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    setActiveDrag(true);
    const percentage = usePercentage(e);
    setValue(percentage);
    document.body.style.overflow = "hidden";
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    setActiveDrag(true);
    const percentage = usePercentage(e);
    setValue(percentage);
    document.body.style.overflow = "hidden";
  };

  const handleMouseMove = (e: React.MouseEvent | any) => {
    const percentage = usePercentage(e);
    setValue(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent | any) => {
    // setTouchX(e.touches[0].clientX);
    const percentage = usePercentage(e);
    setValue(percentage);
  };

  const handleMouseUp = (e: React.MouseEvent | any) => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    setActiveDrag(false);
    const percentage = usePercentage(e);
    setProgress(percentage);
    document.body.style.overflow = "scroll";
  };

  const handleTouchEnd = () => {
    window.removeEventListener("touchmove", handleTouchMove);
    // 모바일 환경에서 이것 붙여주지 않을 시 모든 slider가 움직임
    window.removeEventListener("touchend", handleTouchEnd);
    setActiveDrag(false);
    // hidden인 경우가 맨 처음 실행된 부분이고, 그 다음에 호출될 경우 scroll임
    if (document.body.style.overflow == "hidden") {
      setProgress(value);
    }
    document.body.style.overflow = "scroll";
  };

  return [handleMouseDown, handleTouchStart, handleTouchEnd] as [
    typeof handleMouseDown,
    typeof handleTouchStart,
    typeof handleTouchEnd
  ];
};

export default useSlider;
