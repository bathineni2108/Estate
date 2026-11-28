import React from 'react';

export default function CreateListing() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-7 text-slate-800">
        Create a Listing
      </h1>

      <form className="flex flex-col sm:flex-row gap-6 bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            id="name"
            maxLength="62"
            minLength="10"
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <textarea
            placeholder="Description"
            id="description"
            required
            rows="4"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <input
            type="text"
            placeholder="Address"
            id="address"
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />

          <div className="flex gap-6 flex-wrap mt-2">
            <label htmlFor="sale" className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" id="sale" className="w-5 h-5 accent-slate-700" />
              <span className="text-slate-700 font-medium">Sell</span>
            </label>
            <label htmlFor="rent" className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" id="rent" className="w-5 h-5 accent-slate-700" />
              <span className="text-slate-700 font-medium">Rent</span>
            </label>
            <label htmlFor="parking" className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" id="parking" className="w-5 h-5 accent-slate-700" />
              <span className="text-slate-700 font-medium">Parking spot</span>
            </label>
            <label htmlFor="furnished" className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" id="furnished" className="w-5 h-5 accent-slate-700" />
              <span className="text-slate-700 font-medium">Furnished</span>
            </label>
            <label htmlFor="offer" className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" id="offer" className="w-5 h-5 accent-slate-700" />
              <span className="text-slate-700 font-medium">Offer</span>
            </label>
          </div>

          <div className="flex flex-wrap gap-6 mt-2">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                defaultValue={1}
                className="p-3 border border-gray-300 rounded-lg w-20 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <p className="text-slate-700 font-medium">Beds</p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                id="baths"
                min="1"
                max="10"
                required
                defaultValue={1}
                className="p-3 border border-gray-300 rounded-lg w-20 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <p className="text-slate-700 font-medium">Baths</p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min="50"
                max="10000000"
                required
                className="p-3 border border-gray-300 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <div className="flex flex-col items-start">
                <p className="text-slate-700 font-medium">Regular price</p>
                <span className="text-xs text-gray-500">($ / Month)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                id="discountPrice"
                min="0"
                max="10000000"
                required
                className="p-3 border border-gray-300 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <div className="flex flex-col items-start">
                <p className="text-slate-700 font-medium">Discounted price</p>
                <span className="text-xs text-gray-500">($ / Month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold text-slate-700">
            Images:
            <span className="font-normal text-gray-500 ml-2 text-sm">
              The first image will be the cover (max 6)
            </span>
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="p-3 border border-gray-300 rounded-lg w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
            />
            <button
              type="button"
              className="p-3 text-emerald-700 border border-emerald-700 rounded-lg uppercase font-semibold hover:bg-emerald-700 hover:text-white transition-colors disabled:opacity-80"
            >
              Upload
            </button>
          </div>

          <button
            type="submit"
            className="p-3 bg-slate-700 text-white rounded-lg uppercase font-semibold hover:bg-slate-800 transition-colors disabled:opacity-80"
          >
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}