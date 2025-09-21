import React, { useState } from "react";
import { databases, storage, BUCKET_ID, DATABASE_ID, COLLECTION_ID } from "./appwrite";
import { ID } from "appwrite";

const AdminUpload = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  // Debug env variables
  console.log("BUCKET_ID:", BUCKET_ID);
  console.log("DATABASE_ID:", DATABASE_ID);
  console.log("COLLECTION_ID:", COLLECTION_ID);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please select a file!");
    if (!name || !price || !description) return alert("All fields are required!");

    try {
      setUploading(true);

      // 1️⃣ Upload image to storage
      const uploadedFile = await storage.createFile(BUCKET_ID, ID.unique(), file);

      // 2️⃣ Get actual file URL string
      const fileUrl = storage.getFileView(BUCKET_ID, uploadedFile.$id); // ✅ returns string

      // 3️⃣ Save record in database
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          Name: name,
          Price: parseInt(price),
          Description: description,
          ImageUrl: fileUrl, // now a proper string URL
        }
      );

      alert("Design uploaded successfully ✅");

      // Reset form
      setFile(null);
      setName("");
      setPrice("");
      setDescription("");
    } catch (error) {
      console.error("Upload failed", error);
      alert("Error uploading design ❌: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-amber-50 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload New Jewellery Design</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="text"
          placeholder="Design Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price in ₹"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
          rows={4}
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={uploading}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          {uploading ? "Uploading..." : "Upload Design"}
        </button>
      </form>
    </div>
  );
};

export default AdminUpload;
