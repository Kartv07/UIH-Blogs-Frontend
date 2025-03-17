import React from "react";
import Image from "next/image";

function NoDataFound() {
  return (
    <div className="flex items-center h-screen rounded-lg">
      <Image
        src="/assets/images/png/no-data.png"
        alt="404"
        width={450}
        height={450}
        className="rounded-2xl"
        quality={100}
      />
    </div>
  );
}

export default NoDataFound;
