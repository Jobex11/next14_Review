import Link from "next/link";
const NotFound = () => {
  return (
    <div className="h-100 w-100 m-10 p-5 bordr-center text-xl text-red-500 bg-gray-100 rounded-xl  shadow-xl text-center">
      <h1>This page doen not exist !!!</h1>
      <div>
        <Link
          className="p-2 rounded-xl m-0 border text-white bg-blue-500"
          href="/"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
