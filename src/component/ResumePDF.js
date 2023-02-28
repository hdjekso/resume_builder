import React from "react";
import { Button } from "@mui/material";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { color } from "@mui/system";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ResumePDF = () => {

  //EXPERIENCE
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

  var projectObj = {
    projectName: "Project Name. ",
    projectDesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. ",
    projectHasLink: true, 
    projectLink: "https://www.google.com/",
  };
  var projectData = [];

  function addProjects(projectObj) {
    projectData.push({

      columns: [
        {
          text: [ { text: projectObj.projectName, bold: true, style: "body"}, { text: projectObj.projectDesc, style: "body" }, { text: "Link", link: projectObj.projectLink, decoration: 'underline', style: "link" } ]
        },

      ],

    });
  }

  addProjects(projectObj);
  addProjects(projectObj);

  var awardObj = {
    awardsBullets: ["BP 1", "BP 2", "BP 3"],
  };
  var awardData = [];

  function addAwards(awardObj) {

    var detailsArray = [];
    
    awardObj.awardsBullets.forEach((element) => {
      detailsArray.push(element);
    });

    awardData.push({ ul: [{ ul: detailsArray }] });
    awardData.push({ text: "\n" });
  }

  addAwards(awardObj)

  //DOC
  const docDefinition = {
    content: [

      //NAME
      { text: "FIRSTNAME MIDDLENAME LASTNAME", style: "name" },

      //CONTACT
      { text: "PHONE NUM | ADDRESS", alignment: "center", style: "body" },

      //LINKS
      { text: "LINK1 | LINK2 | LINK3", alignment: "center", style: "body" },
      
      //EDUCATION
      { text: "\nEDUCATION", style: "header" },

      { canvas: [ { type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ] },

      {
        columns: [ 
          {
            text: [ { text: "DEGREE NAME", bold: true }, { text: " , " }, { text: "UNIVERSITY" } ],
            width: "*",
            alignment: "left",
          },
          { text: "DATE", width: "*", alignment: "right" },
        ],
        style: "body"
      },

      //SKILLS
      { text: "\nSKILLS", style: "header" },

      { canvas: [ { type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ] },

      { text: [ { text: "Technical Skills\t" }, { text: "A B C D" } ], style: "body" },

      //EXPERIENCE
      { text: "\nEXPERIENCE", style: "header" },

      { canvas: [ { type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ] },

      experienceData,

      //PROJECTS
      { text: "\nPROJECTS", style: "header" },

      { canvas: [ { type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ] },

      projectData,

      //AWARDS
      { text: "\nAWARDS", style: "header" },

      { canvas: [ { type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ] },

      awardData,

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
      },
      body: {
        fontSize: 12,
      },
      link: {
        fontSize: 12,
        color: "blue",
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
