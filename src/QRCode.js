
import React, { useState } from 'react';
import QRCodeReact from 'qrcode.react';

const QRCode = () => {
  const [qrValue, setQRValue] = useState('');

  const handleInputChange = (event) => {
    setQRValue(event.target.value);
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <div>
        <input
          type="text"
          value={qrValue}
          onChange={handleInputChange}
          placeholder="Enter QR code value"
        />
      </div>
      <QRCodeReact value={qrValue} />
    </div>
  );
};

export default QRCode;