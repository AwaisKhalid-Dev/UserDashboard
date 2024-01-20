import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function Dashboard() {
  const [scanResult, setScanResult] = useState('');
  const [manualId, setManualId] = useState('');
  const [inputMode, setInputMode] = useState('scanner'); // 'scanner' or 'manual'

  const handleScan = data => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = err => {
    console.error('Error:', err);
  };

  const handleInputChange = (e) => {
    setManualId(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <label className="inline-flex items-center mr-6">
          <input type="radio" 
                 className="form-radio" 
                 name="inputMode" 
                 value="scanner" 
                 checked={inputMode === 'scanner'} 
                 onChange={() => setInputMode('scanner')} />
          <span className="ml-2">Scan QR Code</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" 
                 className="form-radio" 
                 name="inputMode" 
                 value="manual" 
                 checked={inputMode === 'manual'} 
                 onChange={() => setInputMode('manual')} />
          <span className="ml-2">Manual Input</span>
        </label>
      </div>

      {inputMode === 'scanner' ? (
        <div className="flex justify-center">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '300px' }}
          />
          {scanResult && <p>Scanned Result: {scanResult}</p>}
        </div>
      ) : (
        <div className="flex justify-center">
          <input type="text" 
                 placeholder="Enter ID" 
                 className="shadow border rounded py-2 px-3 text-gray-700" 
                 value={manualId} 
                 onChange={handleInputChange} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
