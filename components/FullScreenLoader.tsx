import React from "react";

export default function FullScreenLoader() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="size-20 border-t-3 border-r border-blue-400 rounded-full animate-spin"></div>
    </div>
  );
}
