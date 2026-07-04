export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-800 rounded-full border-t-[#00abf0]" />
        <p className="mt-4 text-sm text-gray-500 text-center tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
