import React from "react";

const LiveRatesEmbed = () => {
  return (
    <div className="p-4 bg-yellow-50 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">
        📈 Live Gold & Silver Rates (Powered by Lawat Jewellers)
      </h2>

      <iframe
        // iframe is used for embedding another website/document
        src="http://www.ljplspot.com/"
        title="Live Rate"
        width="100%"
        height="600"
        style={{ border: "none" }}
      ></iframe>

      <p className="mt-4 text-sm text-gray-600">
        Having trouble viewing?{" "}
        <a
          href="http://www.ljplspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-700 underline"
        >
          Click here to open full version 🔗
        </a>
      </p>
    </div>
  );
};

export default LiveRatesEmbed;
