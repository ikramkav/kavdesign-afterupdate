// "use client";
// import React from "react";
// import { Lock, Heart } from "react-feather";

// export default function SingleUnicornCardYlopo() {
//   const tab = {
//     url: "otake.com",
//     clientName: "YLOPO ",
//     clientScndName: "USA ",

//     clientInitial: "C",
//     request: "Need for",
//     Scndrequest: " Real-Time IDX Integration.",
//     result: "AI Call Agents & Call Grading ",
//     // result2: "Built unified data system",
//     badge1: " 2 Way Marketing Platform Integration  ",
//     // badge2line: "Dashboards",
//     badge1Bg: "bg-pink-100 text-pink-700 border-pink-200",
//     badge2: " Data Warehouse Implementation ",
//     badge2Bg: "bg-green-100 text-green-700 border-green-200",
//     icon: <Heart className="w-5 h-5 text-red-500" fill="currentColor" />,
//     image: "/images/Ylopo/LogoYlopo.png",
//     image2: "/images/Ylopo/ScndImage.png",
//   };

//   return (
//     <div className="w-[368px] h-[460px] max-w-5xl mx-auto rounded-[24px] border-[10px] border-t-[5px] border-b-[20px] border-white shadow-[0_20px_56px_0_rgba(69,65,113,0.16)]  font-sans">
//       {/* Browser Header */}
//       <div className="flex items-center   gap-15 bg-white text-sm p-2 ">
//         <span className="flex gap-1">
//           <span className="h-3 w-3 rounded-full bg-[#FF8585]" />
//           <span className="h-3 w-3 rounded-full bg-[#FFCE85]" />
//           <span className="h-3 w-3 rounded-full bg-green-500" />
//         </span>

//         <div
//           className="inline-block font-medium text-gray-700 truncate"
//           style={{
//             width: "107.41px",
//             height: "24px",
//             backgroundColor: "#F4F3F8",
//             borderRadius: "5px",
//             padding: "0 8px",
//             lineHeight: "24px",
//             verticalAlign: "middle",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "5px",
//           }}
//         >
//           <Lock className="h-3 w-3 text-gray-400" />
//           {tab.url}
//         </div>

//         {/* <span className="font-medium text-gray-700 truncate">{tab.url}</span> */}
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col  items-center  ]  bg-[#F3F6F8]  gap-10 lg:gap-10"></div>
//       <img
//         className="w-[352px] h-[396px] rounded-[16px]"
//         src="/images/BusinessSection/SectionImg.jpg"
//       />
//     </div>
//   );
// }
"use client";
import React from "react";
import { Lock, Heart } from "react-feather";

interface SingleUnicornCardYlopoProps {
  url: string;
  image: string;
  clientName?: string;
  clientScndName?: string;
  clientInitial?: string;
  request?: string;
  Scndrequest?: string;
  result?: string;
  badge1?: string;
  badge1Bg?: string;
  badge2?: string;
  badge2Bg?: string;
  icon?: React.ReactNode;
}

export default function SingleUnicornCardYlopo({
  url,
  image,
  clientName = "YLOPO",
  clientScndName = "USA",
  clientInitial = "C",
  request = "Need for",
  Scndrequest = " Real-Time IDX Integration.",
  result = "AI Call Agents & Call Grading",
  badge1 = " 2 Way Marketing Platform Integration ",
  badge1Bg = "bg-pink-100 text-pink-700 border-pink-200",
  badge2 = " Data Warehouse Implementation ",
  badge2Bg = "bg-green-100 text-green-700 border-green-200",
  icon = <Heart className="w-5 h-5 text-red-500" fill="currentColor" />,
}: SingleUnicornCardYlopoProps) {
  return (
    <div className="w-[368px] h-[460px] max-w-5xl mx-auto rounded-[24px] border-[10px] border-t-[5px] border-b-[20px] border-white shadow-[0_20px_56px_0_rgba(69,65,113,0.16)] font-sans">
      {/* Browser Header */}
      <div className="flex items-center gap-15 bg-white text-sm p-2">
        <span className="flex gap-1">
          <span className="h-3 w-3 rounded-full bg-[#FF8585]" />
          <span className="h-3 w-3 rounded-full bg-[#FFCE85]" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </span>

        <div
          className="inline-block font-medium text-gray-700 truncate"
          style={{
            width: "107.41px",
            height: "24px",
            backgroundColor: "#F4F3F8",
            borderRadius: "5px",
            padding: "0 8px",
            lineHeight: "24px",
            verticalAlign: "middle",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <Lock className="h-3 w-3 text-gray-400" />
          {url}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center bg-[#F3F6F8] gap-10 lg:gap-10">
        <img
          className="w-[352px] h-[396px] rounded-[16px]"
          src={image}
          alt={clientName}
        />
      </div>
    </div>
  );
}
