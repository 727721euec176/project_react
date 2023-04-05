import React, { useState } from 'react';
import JsBarcode from 'jsbarcode';

const Barcode = () => {
  const [barcodeValue, setBarcodeValue] = useState('');

  const handleInputChange = (event) => {
    setBarcodeValue(event.target.value);
  };

  const handleGenerateBarcode = () => {
    JsBarcode('#barcode', barcodeValue);
  };

  return (
    <div>
      <h2>Barcode Generator</h2>
      <div>
        <input
          type="text"
          value={barcodeValue}
          onChange={handleInputChange}
          placeholder="Enter barcode value"
        />
        <button onClick={handleGenerateBarcode}>Generate Barcode</button>
      </div>
      <svg id="barcode"></svg>
    </div>
  );
};

export default Barcode;