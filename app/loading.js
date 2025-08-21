// ../app/loading.js
'use client'
import LoadingCircle from "@/components/LoadingCircle";

export default function Loading() {
  return (
    <div className="flex relative min-h-screen items-center justify-center">
      <LoadingCircle />
    </div>
  );
}