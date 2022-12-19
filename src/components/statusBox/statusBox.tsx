import React from "react";

import "./statusBox.css";

interface props {
  status: object;
}

function StatusBox({ status }: props) {
  const statusArray = Object.keys(status);
  const length = statusArray.length;
  return (
    <div className="status-box">
      {/* start, mid, end */}
      {statusArray.map((key, index) => {
        return (
          <div
            key={key}
            className={`${index === 0 ? "status-start" : index === length - 1 ? "status-end" : ""}`}
            style={{
              width: `${status[key as keyof typeof status]}%`,
              backgroundColor: key,
            }}>
            &nbsp;
          </div>
        );
      })}
    </div>
  );
}

export default StatusBox;
