import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="flex flex-col justify-center items-center h-screen bg-black"
    >
      <div className="h-16 flex flex-col justify-center items-center bg-red-600 w-full">
        <h1 className="text-4xl font-black uppercase  ">Dark-Light Projects</h1>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow h-full w-full">
        <Link
          to="/product-preview-card"
          className="text-white font-bold text-xl hover:text-blue-500 transition-colors duration-300 ease-in-out"
        >
          Product Preview Card
        </Link>
        <Link
          to="/three-d-forms"
          className="text-white font-bold text-xl hover:text-blue-500 transition-colors duration-300 ease-in-out"
        >
          3D Forms
        </Link>
      </div>
    </div>
  );
}
