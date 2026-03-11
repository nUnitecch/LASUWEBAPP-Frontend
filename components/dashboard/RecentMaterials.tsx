"use client";

import { Download, FileText, MoreVertical, Paperclip } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const recentMaterials = [
  {
    title: "Data structures Note I : Intro to Data structures",
    code: "CSC203",
    lecturer: "Dr. Micheal Zein",
    size: "2.3 MB",
    type: "pdf",
  },
  {
    title: "Operating System : Concept of Concurrency",
    code: "CSC205",
    lecturer: "Mrs. Mary Ogechi",
    size: "175 KB",
    type: "doc",
  },
  {
    title: "Complex Mathematics II",
    code: "MAT213",
    lecturer: "Dr.Gordon Jackson",
    size: "31 MB",
    type: "pdf",
  },
  {
    title: "Full GNS Compendium",
    code: "GNS201",
    lecturer: "LASU",
    size: "12 MB",
    type: "doc",
  },
  {
    title: "Object Oriented Programming (OOP): C++",
    code: "CSC227",
    lecturer: "Mr. Matthew Phillip",
    size: "1.2 MB",
    type: "doc",
  },
  {
    title: "Concepts of Machine Learning",
    code: "CSC231",
    lecturer: "Dr.Rosovelt Bernley",
    size: "2.3 MB",
    type: "pdf",
  },
];

export default function RecentMaterials() {
  return (
    <section className="py-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Recent Materials</h3>
          <p className="text-sm text-slate-500">
            Latest uploads for your department
          </p>
        </div>
        <Link
          href="/dashboard/materials"
          className="text-sm text-logo font-bold hover:bg-logo/5 px-4 py-2 rounded-lg transition-colors"
        >
          View all
        </Link>
      </div>

      <div className="bg-white border border-slate-100 rounded-[1.5rem] shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-50">
          {recentMaterials.map((material, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.5)" }}
              className="group flex items-center px-4 py-4 sm:px-6 transition-all"
            >
              {/* File Icon with Type Color */}
              <div
                className={cn(
                  "size-12 rounded-2xl flex items-center justify-center shrink-0 mr-4 transition-transform group-hover:scale-110",
                  material.type === "pdf"
                    ? "bg-red-50 text-red-500"
                    : "bg-blue-50 text-blue-500",
                )}
              >
                <FileText className="size-6" />
              </div>

              {/* Info Container */}
              <div className="flex-1 min-w-0 pr-4">
                <h4 className="font-bold text-slate-700 truncate text-sm md:text-base mb-1">
                  {material.title}
                </h4>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                    {material.code}
                  </span>
                  <div className="flex items-center text-slate-400 text-xs">
                    <span className="truncate max-w-25 sm:max-w-none">
                      {material.lecturer}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-300">
                    •
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    {material.size}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-logo hover:text-white transition-all shadow-sm active:scale-90"
                  title="Download Material"
                >
                  <Download className="size-5" />
                </button>
                <button className="p-2 rounded-lg text-slate-300 hover:bg-slate-100 lg:flex hidden">
                  <MoreVertical className="size-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { Download, FileIcon } from "lucide-react";
// import Link from "next/link";

// const recentMaterials = [
//   {
//     title: "Data structures Note I : Intro to Data structures",
//     code: "CSC203",
//     lecturer: "Dr.Micheal zein",
//     size: "2.3MB",
//   },
//   {
//     title: "Operating System : Concept of Concurrency",
//     code: "CSC205",
//     lecturer: "Mrs.Mary Ogechi",
//     size: "175B",
//   },
//   {
//     title: "Complex Mathematics II",
//     code: "MAT213",
//     lecturer: "Dr.Gordon Jackson",
//     size: "31MB",
//   },
//   {
//     title: "Full GNS Compendium",
//     code: "GNS201",
//     lecturer: "LASU",
//     size: "12MB",
//   },
//   {
//     title: "Object Oriented Programming (OOP): C++",
//     code: "CSC227",
//     lecturer: "Mr. Matthew Phillip",
//     size: "1.2MB",
//   },
//   {
//     title: "Concepts of Machine Learning",
//     code: "CSC231",
//     lecturer: "Dr.Rosovelt Bernley",
//     size: "2.3MB",
//   },
// ];

// export default function RecentMaterials() {
//   return (
//     <section className="py-8">
//       <div>
//         <div className="flex justify-between items-center mb-3">
//           <h3 className="text-lg font-semibold">Recent Materials</h3>
//           <Link
//             href="#view-all-materials"
//             className="text-sm text-logo font-semibold"
//           >
//             View all
//           </Link>
//         </div>
//         <div className="border border-primary/15 rounded-2xl overflow-hidden">
//           {recentMaterials.map((course, index) => (
//             <div
//               className="flex items-center border-b border-primary/15 last:border-b-0 px-4 py-3"
//               key={index}
//             >
//               <FileIcon className="size-5 mr-4" />
//               <div className="flex-1">
//                 <h4 className="font-semibold mb-px">{course.title}</h4>
//                 <div className="text-xs space-x-3 text-neutral-400">
//                   <span className="bg-logo/30 p-0.5 text-logo font-semibold rounded-xs">
//                     {course.code}
//                   </span>
//                   <span>{course.lecturer}</span>
//                   <span>{course.size}</span>
//                 </div>
//               </div>
//               <div>
//                 <Download className="size-5 ml-4" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
