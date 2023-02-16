import React from "react";
import { Button } from "@mui/material";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ResumePDF = () => {
  const docDefinition = {
    content: [
      // if you don't need styles, you can use a simple string to define a paragraph
      "This is a standard paragraph, using default style",

      // using a { text: '...' } object lets you set styling properties
      { text: "This paragraph will have a bigger font", fontSize: 15 },

      // if you set the value of text to an array instead of a string, you'll be able
      // to style any part individually
      {
        text: [
          "This paragraph is defined as an array of elements to make it possible to ",
          { text: "restyle part of it and make it bigger ", fontSize: 15 },
          "than the rest.",
        ],
      },
    ],
  };

  const handleDownloadResume = () => {
    pdfMake.createPdf(docDefinition).download("Resume.pdf");
  };

  return (
    <div>
      <Button onClick={handleDownloadResume}>Download Resume</Button>
    </div>
  );
};

export default ResumePDF;
