import React,{useState} from 'react'
import {Document, Page} from "react-pdf/dist/esm/entry.webpack"
//import { Document,Page } from 'react-pdf/dist/entry.parcel';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import Soh from "../../Assets/Dr Sohail.pdf"
import './CV2styles.css'
const  Left = '-'
const Right = '+'

function CV2() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  function OnDocumentLoadSuccess({numPages}) {
    setNumPages(numPages) 
}
  //function onDocumentLoadSuccess2() {
   // pageNumber!==0 ? setPageNumber(pageNumber - 1):setPageNumber(0)
   // }
   //setPageNumber(id)
   
   const turnPage = (direction) => {

      if (direction === Left) {
        if (pageNumber === 1) return;
        setPageNumber(pageNumber - 1);
      }
  
      if (direction === Right) {
        if (pageNumber === numPages) return;
        setPageNumber(pageNumber + 1);
      }
    }
/*
  */

      //<button onClick={setPageNumber(pageNumber - 1)}>Previous</button>
  return (
    <>
  <div className='CV'>
      <div className='left'>
        <div>
      <button className='Btu'onClick={()=>turnPage(Right)}>Next</button>
      <button  className='Btu'onClick={()=>turnPage(Left)}>Previous</button>
    </div>
      <div>
      <button className='Btu'onClick={()=> setPageNumber(3)}>Appendix-A</button>
      <button className='Btu'onClick={()=> setPageNumber(7)}>Appendix-B</button>
      </div>
      </div>
      <div  className="right">
        <div>
      <button className='Btu'onClick={()=> setPageNumber(9)}>Appendix-C</button>
      <button className='Btu'onClick={()=> setPageNumber(11)}> Appendix-D</button>
      </div>
      <div>
      <button className='Btu'onClick={()=> setPageNumber(14)}>Appendix-E </button>
      <button className='Btu'onClick={()=> setPageNumber(16)}>Appendix-F </button>
      </div>
      </div>
      </div>
      <div>
      <p className='page_doc'>Page {pageNumber} of {numPages}</p>
      </div>
      
      <div className="doc">
      <Document  file={Soh} onLoadSuccess={OnDocumentLoadSuccess}>
        <Page  pageNumber={pageNumber} />
    </Document>
    </div>
</>
  
  );
    
}

export default CV2