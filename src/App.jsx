import React, { useState } from 'react';
import { PDFViewer, pdf } from '@react-pdf/renderer';
import MyPdfDocument from './components/MyPdfDocument';
import MyHtmlDocument from './components/MyHtmlDocument';

const App = () => {
  const [view, setView] = useState('main');

  const handleDownloadPdf = async () => {
    const doc = pdf(<MyPdfDocument />);
    const blob = await doc.toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-char-pdf.pdf';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main>
      <h1>REACT PDF</h1>
      {
        view !== 'main' &&
        <button onClick={() => setView('main')}>{'< Go Back'}</button>
      }
      {
        view === 'main' &&
        <section>
          <button onClick={() => setView('simple')}>Simple Way</button>
          <button onClick={() => setView('complicated')}>Overcomplicated Way</button>
        </section>
      }
      {
        view === 'simple' &&
        <PDFViewer width="100%" height="550">
          <MyPdfDocument />
        </PDFViewer>
      }
      {
        view === 'complicated' &&
        <section>
          <MyHtmlDocument />
          <button onClick={handleDownloadPdf}>Download as PDF</button>
        </section>
      }

    </main>
  );
};

export default App;