import { from } from "form-data";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import dayjs from 'dayjs';
import{
  changeProjectName,
  changeProjectDate,
  changeProjectLink,
  changeProjectDescription,
  addProjectLink,
  removeProjectLink,
  changeAwardName,
  changeAwardDate,
  changeAwardSummary,
  addAwardLink,
  removeAwardLink
} from "../../action";
import { useDispatch, useSelector } from "react-redux";



const WorkExperienceSection = () => {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = React.useState("Name");
  const [projectLink, setProjectLink] = React.useState("Job Title");
  const [projectDate, setProjectDate] = React.useState("01/2022");
  const [projectDesc, setProjectDesc] = React.useState("01/2022");

  const handleProjectName = (newName) => {
    setProjectName(newName);
  }
  const handleProjectLink = (newName) => {
    setProjectLink(newName);
  }
  const handleProjectDate = (newName) => {
    setProjectDate(newName);
  }
  const handleProjectDesc = (newName) => {
    setProjectDesc(newName);
  }

  const [awardName, setAwardName] = React.useState("Name");
  const [awardSum, setAwardSum] = React.useState("Job Title");
  const [awardDate, setAwardDate] = React.useState("01/2022");

  const handleAwardName = (newName) => {
    setAwardName(newName);
  }
  const handleAwardSum = (newName) => {
    setAwardSum(newName);
  }
  const handleAwardDate = (newName) => {
    setAwardDate(newName);
  }

  const [linkFields, setLinkFields] = useState([{link: '0'}]);

  const handleAddLink = (index) => {
    setLinkFields([...linkFields, {link: index + 1}])
    dispatch(addProjectLink(projectDesc));
    setProjectDate("");
  }

  const handleRemoveLink = (index) => {
    const list = [...linkFields];
    list.splice(index, 1);
    console.log(list);
    setLinkFields(list);
    dispatch(removeProjectLink(projectDesc));
  }

  const [value, setValue] = React.useState(dayjs('2023-06-13T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  //awards link
  const[award_link,setAward_link]=useState([{awards: '0'}]);
  // console.log("award ",award_link);
  
  const add_award_link= (index) =>{
    setAward_link([...award_link,{awards: index+1}])
  }
  

  const remove_award_link = (index) => {
    const list = [...award_link];
    list.splice(index, 1);
    console.log(list);
    setAward_link(list);
  }



  return (
    <Card 
      sx={{
        border: 1, 
        borderColor: 'grey.500', 
        backgroundColor: "#f1ffff"
      }}
      style={{ 
        minHeight: "78vh", 
        overflow: "auto",
        minWidth:"45vw" 
      }}
    >
      <CardHeader subheader="Projects & Awards" />
        <Typography
          variant="h5"
          component="div"
          sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7", ml:3, mb:-3}}
        >
          Projects
        </Typography>
        {linkFields.map((singleLink, index) => (
          <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3} key={index}>
            <Grid item md={12} xs={12}>
              
              <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 7 }} >
                <Grid item md={8} xs={12}>
                  <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth onChange={handleProjectName} label="Project Name" variant="outlined" />           
                </Grid>
                <Grid item md={4} xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                      label="Start date"
                      inputFormat="MM/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} onChange={handleProjectDate} required fullWidth {...params} />}
                      />
                    </LocalizationProvider>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="Link" onChange={handleProjectLink} variant="outlined" />           
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Project Description" onChange={handleProjectDesc} helperText="TIPS: ~3-4 bullet point, start w/ Action verbs, numbers if possible, highlight/emphasize skills" variant="outlined" multiline rows={5} />
                </Grid>
          
              </Grid>
              {linkFields.length > 1 && linkFields.length - 1 === index && 
                <button className="remove-btn"
                onClick = {() => handleRemoveLink(index)}
                >remove</button>
              }
            </Grid>
            {linkFields.length - 1 === index && linkFields.length < 5 && 
            (
              <Grid item md={12} xs={12} mt={0}>   
                <button 
                className="add-btn"
                onClick={() => handleAddLink(index)}
                >+ Add</button>
              </Grid>    
            )}
            
          </Grid>
        ))}
      <br></br>
      {/* <CardHeader subheader="Awards/Certifications" /> */}
      <Typography
        variant="h5"
        component="div"
        sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7", ml:3, mb:-3}}
      >
        Awards & Certifications
      </Typography>
        {award_link.map((element,index) => (
          <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3} key={index}>
            <Grid item md={12} xs={12}>
              <Grid container item  rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 7 }}>
                <Grid item md={8} xs={12}>
                  <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="Award Title" onChange={handleAwardName} variant="outlined"  rows={1} />
                </Grid>
                <Grid item md={4} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="Date"
                        inputFormat="MM/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} fullWidth onChange={handleAwardDate} {...params} />}
                      />
                  </LocalizationProvider>
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="Award Summary" variant="outlined" onChange={handleAwardSum} helperText="Emphasis on skill, what qualities/effort/skills you used to achieve the Award " multiline rows={2} />
                </Grid>
              </Grid>
              {award_link.length > 1 && award_link.length - 1 === index && 
                <button className="remove-btn"
                onClick = {() => remove_award_link(index)}
                >remove</button>
              }
            </Grid>
            {award_link.length - 1 === index && award_link.length < 3 && 
            (
              <Grid item md={12} xs={12} mt={0}>   
                <button 
                className="add-btn"
                onClick={() => add_award_link(index)}
                >+ Add</button>
              </Grid>    
            )}
            
          </Grid>
        ))}
      <br></br>
    </Card>
  );
};

// const WorkExperienceSection = () => {
//   // const [linkFields, setLinkFields] = React.useState([""]);
//   // const [award_link, setAward_link] = React.useState([""]);
//   const [project_link, setProject_link] = useState([{projects: '0'}]);
//   const[award_link,setAward_link]=useState([{awards: '0'}]);
//   const [projectName, setProjectName] = React.useState("Project Name");
//   const [jobTitle, setJobTitle] = React.useState("Job Title");
//   const [jobDesc, setJobDesc] = React.useState("Lorem ipsum d");

//   // const dispatch = useDispatch();

//   // const projectName = useSelector((state) => {
//   //   return state.projectName;
//   // });
//   // const projectLink = useSelector((state) => {
//   //   return state.projectLink;
//   // });
//   // const projectDate = useSelector((state) => {
//   //   return state.projectDate;
//   // });
//   // const projectDescription = useSelector((state) => {
//   //   return state.projectDescription;
//   // });

//   // const projectHandleAddLink = (link) => {
//   //   console.log(link);
//   //   // setlinks([...links, { link: index + 1 }]);
//   //   dispatch(addProjectLink(link));
//   // };

//   // const projectHandleRemoveLink = (link) => {
//   //   dispatch(removeProjectLink(link));
//   // };

//   // const projecthandleClick = () => {
//   //   dispatch(addProjectLink(linkFields));
//   //   setLinkFields("");
//   // };

//   // const projectNameHandle = (newValue) => {
//   //   dispatch(changeProjectName(newValue.target.value));
//   // };
//   // const projectLinkHandle = (newValue) => {
//   //   dispatch(changeProjectLink(newValue.target.value));
//   // };
//   // const projectDateHandle = (newValue) => {
//   //   dispatch(changeProjectDate(newValue.target.value));
//   // };
//   // const projectDescriptionHandle = (newValue) => {
//   //   dispatch(changeProjectDescription(newValue.target.value));
//   // };

//   // const awardName = useSelector((state) => {
//   //   return state.awardName;
//   // });
//   // const awardDate = useSelector((state) => {
//   //   return state.awardDate;
//   // });
//   // const awardSummary = useSelector((state) => {
//   //   return state.awardSummary;
//   // });
  
//   // const awardHandleAddLink = (link) => {
//   //   console.log(link);
//   //   // setlinks([...links, { link: index + 1 }]);
//   //   dispatch(addAwardLink(link));
//   // };

//   // const awardHandleRemoveLink = (link) => {
//   //   dispatch(removeAwardLink(link));
//   // };

//   // const awardhandleClick = () => {
//   //   dispatch(addProjectLink(award_link));
//   //   setAward_link("");
//   // };

//   // const awardNameHandle = (newValue) => {
//   //   dispatch(changeAwardName(newValue.target.value));
//   // };
//   // const awardDateHandle = (newValue) => {
//   //   dispatch(changeAwardDate(newValue.target.value));
//   // };
//   // const awardSummaryHandle = (newValue) => {
//   //   dispatch(changeAwardSummary(newValue.target.value));
//   // };


//   const handleAddLink = (index) => {
//     setProject_link([...project_link, {projects: index + 1}])
//   }

//   const handleRemoveLink = (index) => {
//     const list = [...project_link];
//     list.splice(index, 1);
//     console.log(list);
//     setProject_link(list);
//   }

//   // const [value, setValue] = React.useState(dayjs('2023-06-13T21:11:54'));
//   // const handleChange = (newValue) => {
//   //   setValue(newValue);
//   // };

//   const add_award_link= (index) =>{
//     setAward_link([...award_link,{awards: index+1}])
//   }
  

//   const remove_award_link = (index) => {
//     const list = [...award_link];
//     list.splice(index, 1);
//     console.log(list);
//     setAward_link(list);
//   }

//   return (
//     <Card 
//       sx={{
//         border: 1, 
//         borderColor: 'grey.500', 
//         backgroundColor: "#f1ffff"
//       }}
//       style={{ 
//         minHeight: "78vh", 
//         overflow: "auto",
//         minWidth:"45vw" 
//       }}
//     >
//       <CardHeader subheader="Projects & Awards" />        
//         <Typography
//           variant="h5"
//           component="div"
//           sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7", ml:3, mb:-3}}
//         >
//           Projects
//         </Typography>
//         {project_link.map((singleLink, index) => (
//           <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3} key={index}>
//             <Grid item md={12} xs={12}>
              
//               <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 7 }} >
//                 <Grid item md={8} xs={12}>
//                   <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Project Name" variant="outlined" value={projectName} onChange={projectNameHandle}/>           
//                 </Grid>
//                 <Grid item md={4} xs={6}>
//                   <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <DesktopDatePicker
//                       label="Start date"
//                       inputFormat="MM/YYYY"
//                       value={projectDate}
//                       onChange={(newValue) => {
//                         projectDateHandle(newValue);
//                       }}
//                       renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
//                       />
//                     </LocalizationProvider>
//                 </Grid>
//                 <Grid item md={6} xs={12}>
//                   <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="Link" variant="outlined" value={projectLink} onChange={projectLinkHandle} />           
//                 </Grid>
//                 <Grid item md={12} xs={12}>
//                   <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Project Description" value={projectDescription} onChange={projectDescriptionHandle} helperText="TIPS: ~3-4 bullet point, start w/ Action verbs, numbers if possible, highlight/emphasize skills" variant="outlined" multiline rows={5} />
//                 </Grid>
          
//               </Grid>
//               {linkFields.length > 1 && linkFields.length - 1 === index && 
//                 <button className="remove-btn"
//                 onClick = {(link) => projectHandleRemoveLink(link)}
//                 >remove</button>
//               }
//             </Grid>
//             {linkFields.length - 1 === index && linkFields.length < 5 && 
//             (
//               <Grid item md={12} xs={12} mt={0}>   
//                 <button 
//                 className="add-btn"
//                 onClick={projecthandleClick}
//                 >+ Add</button>
//               </Grid>    
//             )}
            
//           </Grid>
//         ))}
//       <br></br>
//       {/* <CardHeader subheader="Awards/Certifications" /> */}
//       <Typography
//         variant="h5"
//         component="div"
//         sx={{ mb: 0.5, fontWeight: "bold", color: "#5484D7", ml:3, mb:-3}}
//       >
//         Awards & Certifications
//       </Typography>
//         {award_link.map((element,index) => (
//           <Grid container spacing={4} mt={1} paddingRight={3} paddingLeft={3} key={index}>
//             <Grid item md={12} xs={12}>
//               <Grid container item  rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 7 }}>
//                 <Grid item md={8} xs={12}>
//                   <TextField sx={{backgroundColor: "#ffffff"}} fullWidth label="Award Title" variant="outlined" value={awardName} onChange={awardNameHandle} rows={1} />
//                 </Grid>
//                 <Grid item md={4} xs={12}>
//                   <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <DesktopDatePicker
//                         label="End date"
//                         inputFormat="MM/YYYY"
//                         value={awardDate}
//                         onChange={(newValue) => {
//                           awardDateHandle(newValue);
//                         }}
//                         renderInput={(params) => <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth {...params} />}
//                       />
//                   </LocalizationProvider>
//                 </Grid>
//                 <Grid item md={12} xs={12}>
//                   <TextField sx={{backgroundColor: "#ffffff"}} required fullWidth label="Award Summary" variant="outlined" value={awardSummary} onChange={awardSummaryHandle} helperText="Emphasis on skill, what qualities/effort/skills you used to achieve the Award " multiline rows={2} />
//                 </Grid>
//               </Grid>
//               {award_link.length > 1 && award_link.length - 1 === index && 
//                 <button className="remove-btn"
//                 onClick = {(link) => awardHandleRemoveLink(link)}
//                 >remove</button>
//               }
//             </Grid>
//             {award_link.length - 1 === index && award_link.length < 3 && 
//             (
//               <Grid item md={12} xs={12} mt={0}>   
//                 <button 
//                 className="add-btn"
//                 onClick={awardhandleClick}
//                 >+ Add</button>
//               </Grid>    
//             )}
            
//           </Grid>
//         ))}
//       <br></br>
//     </Card>
//   );
// };

export default WorkExperienceSection;