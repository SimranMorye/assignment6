import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const App = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js">
            <div
                style={{
                    height: 'auto',
                    width: '100%',
                    
                }}
            >
                <Viewer
                    fileUrl={`${process.env.PUBLIC_URL}/frame.pdf`}
                    
                />
            </div>
        </Worker>
    );
};

export default App;
