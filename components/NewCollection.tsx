import React from "react";

const NewCollection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-4 h-56 mt-16">
      <div className="flex flex-col justify-between text-black text-2xl h-56 md:w-96">
        <div>
          <p className="font-bold text-3xl">New Collection</p>
          <p className="text-lg text-gray-500">Summer 2025</p>
        </div>
        <div>
          <div className="flex gap-3 justify-between">
            <button className="border border-black px-2 w-76 text-lg">
              Go To Shopping {"--->"}
            </button>
            <div className="flex gap-2">
              <button className="border border-black px-2 text-lg">
                {"<"}
              </button>
              <button className="border border-black px-2 text-lg">
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black text-2xl border border-black">as</div>
      <div className="text-black text-2xl border border-black">as</div>
    </div>
  );
};

export default NewCollection;
