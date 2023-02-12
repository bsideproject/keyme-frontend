import React, { useEffect, useState } from "react";

import { ReactComponent as IconCalendar } from "~assets/icons/ico_calendar2.svg";
import { ReactComponent as IconDown } from "~assets/icons/ico_down.svg";
import { ReactComponent as IconUp } from "~assets/icons/ico_up.svg";
import { PickerCalendar } from "~components/Calendar/PickerCalendar";
import { palette } from "~styles/palette";
import { pickerFormmater } from "~utils/datetime";

import { DatePickerTarget, PickerContainer } from "./DatePicker.styles";

interface Props {
  date?: Date;
  setDate: (params?: Date) => void;
  pickerShow: boolean;
  setPickerShow: (param: boolean) => void;
}

function DatePicker({ date, setDate, pickerShow, setPickerShow }: Props) {
  return (
    <>
      <div style={{ fontSize: 18, marginTop: "2rem" }}>
        <div>거의 다 왔어요!</div>
        <div style={{ fontWeight: 700, marginTop: "0.5rem" }}>OKR의 D-day를 설정해주세요.</div>
      </div>
      <DatePickerTarget
        style={{
          borderRadius: 10,
          boxSizing: "border-box",
          border: pickerShow ? `1.5px solid ${palette.primary}` : "",
        }}
        onClick={() => {
          setPickerShow(!pickerShow);
        }}>
        <IconCalendar />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ color: pickerShow ? palette.primary : "#909090", fontWeight: 500 }}>
            날짜를 선택하세요
          </div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{pickerFormmater(date)}</div>
        </div>
        {pickerShow ? <IconUp width={36} /> : <IconDown width={36} />}
      </DatePickerTarget>

      <PickerContainer pickerShow={pickerShow}>
        <PickerCalendar pickedDate={date} setPickerDate={setDate} />
      </PickerContainer>
    </>
  );
}

export default DatePicker;
