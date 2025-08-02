import React from "react";

function Avtar({ smallSize, largeSize }) {
  return (
    <div className={`rounded-full overflow-hidden ${smallSize} xl:${largeSize}`}>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        className="object-cover h-full w-full"
        alt="avatar"
      />
    </div>
  );
}

export default Avtar;
