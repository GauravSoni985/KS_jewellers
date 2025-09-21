import React, { useEffect, useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID } from "../lib/context/appwrite";

const Gallery = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        setDesigns(res.documents);
      } catch (error) {
        console.error("Failed to load designs", error);
      }
    };

    fetchDesigns();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {designs.map((design) => (
        <div
          key={design.$id}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img
            src={design.ImageUrl}
            alt={design.Name}
            className="w-full h-60 object-cover"
          />
          <div className="p-4 bg-gray-300">
            <h3 className="text-lg font-bold">{design.Name}</h3>
            <p className="text-yellow-700 font-semibold">₹ {design.Price}</p>
            <p className="text-black text-sm mt-2">{design.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
