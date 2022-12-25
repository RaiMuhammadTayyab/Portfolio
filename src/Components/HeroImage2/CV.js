import React,{ useState} from 'react'
import{Document,Page} from 'react-pdf/dist/esm/entry.webpack'
import CV2 from "../../Assets/Dr Sohail.pdf"
import './Heroimage2styles.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footers/Footer'

 const  Left = '-'
  const Right = '+'


function CV() {
  const [pageNumber, setPageNumber] = useState(0);
  const [numPages, setNumPages] = useState(null);
  function OnDocumentLoadSuccess({numPages}) {
    setNumPages(numPages)
  
}
  //function onDocumentLoadSuccess2() {
   // pageNumber!==0 ? setPageNumber(pageNumber - 1):setPageNumber(0)
   // }
    const turnPage = (direction) => {
      if (direction === Left) {
        if (pageNumber === 1) return;
        setPageNumber(pageNumber - 1);
      }
  
      if (direction === Right) {
        if (pageNumber === numPages) return;
        setPageNumber(pageNumber + 1);
      }
    };




      //<button onClick={setPageNumber(pageNumber - 1)}>Previous</button>
  return (
    <div >
      <Navbar/>
      <div className='CV'>
      
      <div className='Button'>
      <h2>  CURRICULUM VITAE OF DR SOHAIL RAI</h2>
      <button className='Btu'onClick={() => turnPage(Right)}>Next</button>
      <button className='Btu' onClick={() => turnPage(Left)}>Previous</button>
      <p>Page {pageNumber} of {numPages}</p>
      </div>
      <div className="doc">
      <Document  file={CV2} onLoadSuccess={OnDocumentLoadSuccess}>
        <Page  pageNumber={pageNumber} />
    </Document>
    </div>
    </div>
    <Footer/>
    </div>
  );
    
}

export default CV