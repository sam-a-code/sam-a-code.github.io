import { Document, Page } from "react-pdf";



function Resume() {
    return (
        <div>
             <Document file="https://www.canva.com/design/DAFXHmLi6W4/view" >
                <Page  />
            </Document>
        <h1>Resume</h1>
        <iframe src="https://www.canva.com/design/DAFXHmLi6W4/view"/>

        </div>
    );
  }

  export default Resume;
