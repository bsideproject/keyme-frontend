import React, { useEffect, useRef, useState } from "react";

import useSlider from "~hooks/useSlider";

import { Slider, SliderContainer, SliderFill, SliderText } from "./ProgressSlider.styles";

interface cProps {
  progress: number;
  colorIndex: number;
  setProgress: (params: number) => void;
}

function ProgressSlider({ progress, colorIndex, setProgress }: cProps) {
  const [value, setValue] = useState(progress);

  const [activeDrag, setActiveDrag] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  const [handleMouseDown, handleTouchStart, handleTouchEnd] = useSlider(
    offsetX,
    maxWidth,
    value,
    setActiveDrag,
    setValue,
    setProgress
  );

  const myRef = useRef<HTMLDivElement>(null);

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

  return (
    <SliderContainer>
      <Slider
        activeDrag={activeDrag}
        onMouseDown={(e) => handleMouseDown(e)}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={handleTouchEnd}
        ref={myRef}>
        <SliderFill activeDrag={activeDrag} value={value} colorIndex={colorIndex} />
      </Slider>
      {/* touchUp 되었을 때 알아서 숨겨지게 해야함 */}
      <SliderText activeDrag={activeDrag} value={value} colorIndex={colorIndex}>
        {value}%
      </SliderText>
    </SliderContainer>
  );
}

export default ProgressSlider;
