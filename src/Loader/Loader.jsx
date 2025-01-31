import React from "react";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
      <div className="ring">
        <div className="ring">
          <div className="ring">
            <div className="ring"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
