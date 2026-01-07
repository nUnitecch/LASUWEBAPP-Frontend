import { stepsDescriptions } from "@/constants/signupFields";

export default function ProgressBar({ steps }: { steps: number }) {
  return (
    <>
      <p>
        Step {steps} of {stepsDescriptions.length} ---{" "}
        {stepsDescriptions[steps]}
      </p>
      <div className="flex justify-center gap-2 my-8 px-4">
        {stepsDescriptions.map((_, i) => (
          <div
            key={i}
            className={`w-full h-1 rounded-full transition-colors ${
              steps >= i + 1 ? "btn-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}
