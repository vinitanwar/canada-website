// components/FullPageSkeleton.jsx
export default function FullPageSkeleton() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-white animate-pulse space-y-6">
      {/* Simulate logo/header */}
      <div className="h-6 w-32 bg-gray-300 rounded" />

      {/* Simulate navbar */}
      <div className="h-4 w-3/5 bg-gray-200 rounded" />

      {/* Simulate hero section */}
      <div className="h-48 w-4/5 bg-gray-300 rounded" />

      {/* Simulate a couple of text lines */}
      <div className="h-4 w-2/3 bg-gray-200 rounded" />
      <div className="h-4 w-1/2 bg-gray-200 rounded" />

      {/* Simulate button */}
      <div className="h-10 w-24 bg-gray-300 rounded" />
    </div>
  );
}
