import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto h-full">
      <div className="flex justify-center items-center flex-col h-[80vh]">
        <h1 className="text-4xl mb-3 text-outline text-transparent">
          Not found – 404!
        </h1>
        <div>
          <Link href="/">Go back to Home</Link>
        </div>
      </div>
    </div>
  );
}
