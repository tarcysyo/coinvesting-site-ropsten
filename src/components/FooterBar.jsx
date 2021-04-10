import React, { useState } from 'react';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pdfjs } from 'react-pdf';
import { Viewer } from '@react-pdf-viewer/core';
import Modal from 'react-bootstrap/Modal';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import whitepaper from '../assets/whitepaper.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function FooterBar() {
  const [wpShow, setwpShow] = useState(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <footer className="text-center" style={{color: "#ffcc00", backgroundColor: "black", margin: "auto", width: "100%", position: 'fixed', bottom: 0, left: 0}}>
      <small style={{position: 'fixed', bottom: 0, left: 0}}><strong>COINVEX address: <a target="blank" href="https://ropsten.etherscan.io/token/0xe3426dd0bcd93946790b305c039c8088ecec6ffc">0xe3426dd0bcd93946790b305c039c8088ecec6ffc</a></strong></small>
      <button style={{backgroundColor: "black", color: "#ffcc00", border: "none", textDecoration: "underline"}} onClick={() => setwpShow(true)}>Whitepaper</button>
      <Modal show={wpShow} onHide={() => setwpShow(false)} size="xl" scrollable="true">
        <Modal.Header closeButton style={{backgroundColor: "#090909", color: "#ffcc00"}}>
          <Modal.Title>Whitepaper</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Viewer
            fileUrl={whitepaper}
            plugins={[
            // Register plugins
              defaultLayoutPluginInstance
            ]}
          />
        </Modal.Body>
      </Modal> 
      <br />
      <span>Coinvesting DeFi &copy; 2021</span>
    </footer>
  );
}; 

export default FooterBar;
