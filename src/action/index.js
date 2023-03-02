import { create } from "@mui/material/styles/createTransitions";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const firstnameSlice = createSlice({
  name: "firstname",
  initialState: "",
  reducers: {
    changeFirstName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const middlenameSlice = createSlice({
  name: "middlename",
  initialState: "",
  reducers: {
    changeMiddleName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const lastnameSlice = createSlice({
  name: "lastname",
  initialState: "",
  reducers: {
    changeLastName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const addressSlice = createSlice({
  name: "address",
  initialState: "",
  reducers: {
    changeAddress(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const collegeSlice = createSlice({
  name: "college",
  initialState: "",
  reducers: {
    changeCollege(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const linkSlice = createSlice({
  name: "link",
  initialState: [],
  reducers: {
    addLink(state, action) {
      state.push(action.payload);
      return state;
    },
    removeLink(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

const majorSlice = createSlice({
  name: "major",
  initialState: "",
  reducers: {
    changeMajor(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const degreeSlice = createSlice({
  name: "degree",
  initialState: "",
  reducers: {
    changeDegree(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const gpaSlice = createSlice({
  name: "gpa",
  initialState: "",
  reducers: {
    changeGpa(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const emailSlice = createSlice({
  name: "email",
  initialState: "",
  reducers: {
    changeEmail(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const current = new Date();

const dateSlice = createSlice({
  name: "date",
  initialState: `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`,
  reducers: {
    changedate(state, action) {
      state = `${action.payload.$M + 1}/${action.payload.$D}/${
        action.payload.$y
      }`;
      // `${action.payload.$m}/${action.payload.$d}/${action.payload.$y}`
      return state;
    },
  },
});

// FOR THE SKILL SECTION PAGE :

const skillSlice = createSlice({
  name: "skill",
  initialState: [],
  reducers: {
    addskill(state, action) {
      state = action.payload;
      return state;
    },
    removeskill(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

const courseWorkSlice = createSlice({
  name: "coursework",
  initialState: [],
  reducers: {
    addcoursework(state, action) {
      state = action.payload;
      return state;
    },
    removecoursework(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

const workexperienceSlcie = createSlice({
  name: "workexperience",
  initialState: [],
  reducers: {
    addWorkexperience(state, action) {
      state.push(action.payload);
      return state;
    },
    removeWorkExperience(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
    editCompanyName(state, action) {
      //  console.log(action.payload);
      state[action.payload[0]].companyName = action.payload[1];
      return state;
    },
    editJobTitle(state, action) {
      state[action.payload[0]].jobTitle = action.payload[1];
      return state;
    },
    editJobDescription(state, action) {
      state[action.payload[0]].jobDescription = action.payload[1];
      return state;
    },
    editbutton(state, action) {
      state[action.payload].btnStatus = !state[action.payload].btnStatus;
      return state;
    },
    editStartDate(state,action){
      state[action.payload[0]].startDate = action.payload[1]; 
      return state;
    },
    editEndDate(state,action){
      state[action.payload[0]].endDate = action.payload[1]; 
      return state;
    }
    // changevarible(state,action){
    //   const index = state.indexOf(action.payload);
    //   state[index] =
    // },
  },
});

// Project Section and Award:
const projectSlice = createSlice({
  name: "project",
  initialState: [],
  reducers: {
    addProject(state, action) {
      state.push(action.payload);
      return state;
    },
    removeProject(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
    editProjectName(state, action) {
      state[action.payload[0]].projectName = action.payload[1];
      return state;
    },
    editProjectDescription(state, action) {
      state[action.payload[0]].projectDescrption = action.payload[1];
      return state;
    },
    editProjectStartDate(state, action) {
      state[action.payload[0]].startDate = action.payload[1];
    },
    editProjectEndDate(state, action) {
      state[action.payload[0]].endDate = action.payload[1];
    },
  },
});

const awardSLcie = createSlice({
  name: "award",
  initialState: [],
  reducers: {
    addAward(state, action) {
      state.push(action.payload);
      return state;
    },
    removeAward(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
    editAwardTitle(state, action) {
      state[action.payload[0]].awardTitle = action.payload[1];
      return state;
    },
    editAwardSummary(state, action) {
      state[action.payload[0]].awardSummary = action.payload[1];
      return state;
    },
    editAwardDate(state, action) {
       state[action.payload[0]].awardDate = action.payload[1];
      return state;
    },
  },
});
  const optionalSlice = createSlice({
    name:'option',
    initialState:{workexperience:true,award:true,project:true},
    reducers:{
      changeWorkexperience(state,action){
        state.workexperience = action.payload;
        return state;
      },
      changeaward(state,action){
        state.award = action.payload;
        return state;
      },
      changeproject(state,action){
        state.project = action.payload
        return state;
      }
    }
  })

const store = configureStore({
  reducer: {
    firstname: firstnameSlice.reducer,
    middlename: middlenameSlice.reducer,
    lastname: lastnameSlice.reducer,
    address: addressSlice.reducer,
    college: collegeSlice.reducer,
    major: majorSlice.reducer,
    degree: degreeSlice.reducer,
    gpa: gpaSlice.reducer,
    email: emailSlice.reducer,
    date: dateSlice.reducer,
    links: linkSlice.reducer,
    skills: skillSlice.reducer,
    courseworks: courseWorkSlice.reducer,
    workexperiences: workexperienceSlcie.reducer,
    projects: projectSlice.reducer,
    awards: awardSLcie.reducer,
    option:optionalSlice.reducer,
  },
});

export { store };
export const { changeFirstName } = firstnameSlice.actions;
export const { changeMiddleName } = middlenameSlice.actions;
export const { changeLastName } = lastnameSlice.actions;
export const { changeAddress } = addressSlice.actions;
export const { changeEmail } = emailSlice.actions;
export const { addLink, removeLink } = linkSlice.actions;
export const { changeCollege } = collegeSlice.actions;
export const { changeGpa } = gpaSlice.actions;
export const { changeMajor } = majorSlice.actions;
export const { changeDegree } = degreeSlice.actions;
export const { changedate } = dateSlice.actions;

export const { addskill, removeskill } = skillSlice.actions;
export const { addcoursework, removecoursework } = courseWorkSlice.actions;
export const {
  addWorkexperience,
  removeWorkExperience,
  editCompanyName,
  editJobTitle,
  editJobDescription,
  editbutton,
  editStartDate,
  editEndDate
} = workexperienceSlcie.actions;

export const { addAward, removeAward, editAwardDate, editAwardSummary, editAwardTitle} = awardSLcie.actions;
export const { addProject, removeProject, editProjectEndDate,editProjectStartDate,editProjectDescription,editProjectName } = projectSlice.actions;

export const { changeWorkexperience, changeaward, changeproject } =
  optionalSlice.actions;
