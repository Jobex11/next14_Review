import React from "react";

let fetchData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
};

const page = async () => {
  let products = await fetchData();
  console.log(products);
  return (
    <div className="m-3 p-3 text-center">
      <h1 className="capitalize text-xl">
        Fetching data using client components
      </h1>
      <p>
        {products?.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </p>
    </div>
  );
};

export default page;
