import React from "react";

function Avtar({smallSize,largeSize}) {
  return (
    <>
      <div className={`h-[${smallSize}] xl:h-[${largeSize}] w-[${smallSize}] xl:w-[${largeSize}] rounded-[100%] overflow-hidden`}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          className="object-cover h-full w-full"
        />
      </div>
    </>
  );
}

export default Avtar;
