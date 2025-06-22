import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const TestPrint = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Test Print",
    onAfterPrint: () => alert("Printed successfully!"),
  });

  return (
    <div className="p-4">
      <div ref={componentRef} className="bg-white p-4 border rounded shadow">
        <h2 className="text-2xl font-bold mb-2">Hello from React to Print</h2>
        <p>This content will be printed when you click the button below.</p>
      </div>

      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Print this section
      </button>
    </div>
  );
};

export default TestPrint;
