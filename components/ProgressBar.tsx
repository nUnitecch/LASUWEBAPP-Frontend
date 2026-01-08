import { stepsDescriptions } from "@/constants/signupFields";

export default function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <>
      <p>
        Step {currentStep} of {stepsDescriptions.length} ---{" "}
        {stepsDescriptions[currentStep]}
      </p>
      <div className="flex justify-center gap-2 my-8 px-4">
        {stepsDescriptions.map((_, i) => (
          <div
            key={i}
            className={`w-full h-1 rounded-full transition-colors ${
              currentStep >= i + 1 ? "btn-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}
