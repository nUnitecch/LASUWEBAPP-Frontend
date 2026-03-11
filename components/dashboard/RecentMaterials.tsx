import { Download, FileIcon } from "lucide-react";
import Link from "next/link";

const recentMaterials = [
  {
    title: "Data structures Note I : Intro to Data structures",
    code: "CSC203",
    lecturer: "Dr.Micheal zein",
    size: "2.3MB",
  },
  {
    title: "Operating System : Concept of Concurrency",
    code: "CSC205",
    lecturer: "Mrs.Mary Ogechi",
    size: "175B",
  },
  {
    title: "Complex Mathematics II",
    code: "MAT213",
    lecturer: "Dr.Gordon Jackson",
    size: "31MB",
  },
  {
    title: "Full GNS Compendium",
    code: "GNS201",
    lecturer: "LASU",
    size: "12MB",
  },
  {
    title: "Object Oriented Programming (OOP): C++",
    code: "CSC227",
    lecturer: "Mr. Matthew Phillip",
    size: "1.2MB",
  },
  {
    title: "Concepts of Machine Learning",
    code: "CSC231",
    lecturer: "Dr.Rosovelt Bernley",
    size: "2.3MB",
  },
];

export default function RecentMaterials() {
  return (
    <section className="py-8">
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Recent Materials</h3>
          <Link
            href="#view-all-materials"
            className="text-sm text-logo font-semibold"
          >
            View all
          </Link>
        </div>
        <div className="border border-primary/15 rounded-2xl overflow-hidden">
          {recentMaterials.map((course) => (
            <div className="flex items-center border-b border-primary/15 last:border-b-0 px-4 py-3">
              <FileIcon className="size-5 mr-4" />
              <div className="flex-1">
                <h4 className="font-semibold mb-px">{course.title}</h4>
                <div className="text-xs space-x-3 text-neutral-400">
                  <span className="bg-logo/30 p-0.5 text-logo font-semibold rounded-xs">
                    {course.code}
                  </span>
                  <span>{course.lecturer}</span>
                  <span>{course.size}</span>
                </div>
              </div>
              <div>
                <Download className="size-5 ml-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
