import React from "react";
import Image from "next/image";

function NoDataFound() {
  return (
    <div className="flex items-center h-screen rounded-lg">
      <Image
        src="https://res.cloudinary.com/dbqfsf3wi/image/upload/v1742291429/page-not-found_qzurvx.png"
        alt="No Result !"
        width={450}
        height={450}
        className="rounded-2xl"
        quality={100}
      />
    </div>
  );
}

export default NoDataFound;
