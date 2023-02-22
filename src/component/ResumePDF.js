import React from "react";
import { Button } from "@mui/material";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ResumePDF = () => {
  var expData = {
    jobTitle: "JOB TITLE",
    jobDate: "JOB DATE",
    jobOrg: "COMPANY",
    jobLocation: "CITY, STATE",
    jobDetails: ["BP 1", "BP 2", "BP 3"],
  };
  var experienceData = [];

  function addExperience(data) {
    experienceData.push({
      columns: [
        {
          text: data.jobTitle + "\n" + data.jobOrg + "\n",
          width: "*",
          alignment: "left",
        },
        {
          text: data.jobDate + "\n" + data.jobLocation + "\n",
          width: "*",
          alignment: "right",
        },
      ],
    });
    var detailsArray = [];
    data.jobDetails.forEach((element) => {
      detailsArray.push(element);
    });

    experienceData.push({ ul: [{ ul: detailsArray }] });
    experienceData.push({ text: "\n" });
  }

  addExperience(expData);
  addExperience(expData);

  const docDefinition = {
    content: [
      // if you don't need styles, you can use a simple string to define a paragraph
      { text: "FIRSTNAME MIDDLENAME LASTNAME", style: "name" },

      // using a { text: '...' } object lets you set styling properties
      { text: "PHONE NUM | ADDRESS", alignment: "center", style: "body" },

      {
        text: "LINK1 | LINK2 | LINK3",
        alignment: "center",
        style: "body",
      },

      {
        text: "\nEDUCATION",
        style: "header",
      },

      {
        columns: [
          {
            text: [
              { text: "DEGREE NAME", bold: true },
              { text: " , " },
              { text: "UNIVERSITY" },
            ],
            width: "*",
            alignment: "left",
          },
          { text: "DATE", width: "*", alignment: "right" },
        ],
        style: "body",
      },

      {
        text: "\nSKILLS",
        style: "header",
      },

      {
        text: [{ text: "Technical Skills\t" }, { text: "A B C D" }],
        style: "body",
      },

      {
        text: "\nEXPERIENCE",
        style: "header",
      },
      experienceData,

      //{ columns: [], style: "body" },
    ],
    styles: {
      name: {
        fontSize: 18,
        bold: true,
        alignment: "center",
      },
      header: {
        fontsize: 14,
        bold: true,
        decoration: "underline",
      },
      body: {
        fontSize: 12,
      },
    },
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
