// import { Document, Page } from "react-pdf";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import bookDesserts from '../images/book-desserts.png'



function Resume() {
    return (
        <div>
             <Document file="logo192.pdf" >
                <Page  />
            </Document>
        <h1>Resume</h1>
        <iframe src="https://www.canva.com/design/DAFXHmLi6W4/view"/>
        </div>
    );
  }

  export default Resume;
