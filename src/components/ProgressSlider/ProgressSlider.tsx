import React, { MouseEvent, TouchEvent, useEffect, useRef, useState } from "react";

import { Slider, SliderFill } from "./ProgressSlider.styles";

interface cProps {
  progress: number;
  setProgress: (params: number) => void;
}

function ProgressSlider({ progress, setProgress }: cProps) {
  const [value, setValue] = useState(progress);

  const [activeDrag, setActiveDrag] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  const myRef = useRef<HTMLDivElement>(null);

  const usePercentage = (e: MouseEvent | TouchEvent | any) => {
    const calPercentage = (x: number, max: number) => {
      if (x < 0) return 0;
      else if (x > max) return 100;
      return Math.round((x / max) * 100);
    };

    let newX = 0;
    if (e.type.includes("mouse")) {
      newX = e.clientX - offsetX;
    } else if (e.type.includes("touch")) {
      newX = e.touches[0].clientX - offsetX;
    }
    const percentage = calPercentage(newX, maxWidth);
    return percentage;
  };

  useEffect(() => {
    function handleResize() {
      if (myRef.current) {
        setOffsetX(myRef.current.offsetLeft);
        setMaxWidth(myRef.current.clientWidth);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    setActiveDrag(true);
    const percentage = usePercentage(e);
    setValue(percentage);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // 드래그 들어갈 시 스크롤 금지
    window.addEventListener("touchmove", handleTouchMove);
    setActiveDrag(true);
    const percentage = usePercentage(e);
    setValue(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent | any) => {
    const percentage = usePercentage(e);
    setValue(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent | any) => {
    const percentage = usePercentage(e);
    setValue(percentage);
  };

  const handleMouseUp = (e: React.MouseEvent | any) => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    setActiveDrag(false);
    const percentage = usePercentage(e);
    setProgress(percentage);
  };

  const handleTouchEnd = () => {
    setActiveDrag(false);
    setProgress(value);
  };

  return (
    <Slider
      activeDrag={activeDrag}
      onMouseDown={(e) => handleMouseDown(e)}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={handleTouchEnd}
      ref={myRef}>
      <SliderFill activeDrag={activeDrag} value={value} colorIndex={0} />
      {/* handle show, 위치조정 */}
      {value}
    </Slider>
  );
}

export default ProgressSlider;
