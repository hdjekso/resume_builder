import { configureStore, createSlice } from "@reduxjs/toolkit";


import { getDefaultMiddleware } from "@reduxjs/toolkit";
// for the profile page for :
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

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

// for the skill page:

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
    //
  },
});



//work page

const projectnameSlice = createSlice({
  name: "projectname",
  initialState: "",
  reducers: {
    changeProjectName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const projectlinkSlice = createSlice({
  name: "projectlink",
  initialState: "",
  reducers: {
    changeProjectLink(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const projectdateSlice = createSlice({
  name: "projectdate",
  initialState: `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`,
  reducers: {
    changeProjectDate(state, action) {
      state = `${action.payload.$M + 1}/${action.payload.$D}/${
        action.payload.$y
      }`;
      // `${action.payload.$m}/${action.payload.$d}/${action.payload.$y}`
      return state;
    },
  },
});

const projectdescriptionSlice = createSlice({
  name: "projectsdescription",
  initialState: "",
  reducers: {
    changeProjectDescription(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const projectbtnSlice = createSlice({
  name: "projectbtn",
  initialState: [],
  reducers: {
    addProjectLink(state, action) {
      state.push(action.payload);
      return state;
    },
    removeProjectLink(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

const awardnameSlice = createSlice({
  name: "awardname",
  initialState: "",
  reducers: {
    changeAwardName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const awarddateSlice = createSlice({
  name: "awarddate",
  initialState: `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`,
  reducers: {
    changeAwardDate(state, action) {
      state = `${action.payload.$M + 1}/${action.payload.$D}/${
        action.payload.$y
      }`;
      // `${action.payload.$m}/${action.payload.$d}/${action.payload.$y}`
      return state;
    },
  },
});

const awardsummarySlice = createSlice({
  name: "awardsummary",
  initialState: "",
  reducers: {
    changeAwardSummary(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const awardbtnSlice = createSlice({
  name: "awardbtn",
  initialState: [],
  reducers: {
    addAwardLink(state, action) {
      state.push(action.payload);
      return state;
    },
    removeAwardLink(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

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
    projectname: projectnameSlice.reducer,
    projectlink: projectlinkSlice.reducer,
    projectdate: projectdateSlice.reducer,
    projectdescription: projectdescriptionSlice.reducer,
    projectbtn: projectbtnSlice.reducer,
    awardname: awardnameSlice.reducer,
    awarddate: awarddateSlice.reducer,
    awardsummary: awardsummarySlice.reducer,
    awardbtnSlice: awardbtnSlice.reducer
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

export const { changeProjectName } = projectnameSlice.actions;
export const { changeProjectLink } = projectlinkSlice.actions;
export const { changeProjectDate } = projectdateSlice.actions;
export const { changeProjectDescription } = projectdescriptionSlice.actions;
export const { addProjectLink, removeProjectLink } = projectbtnSlice.actions;
export const { changeAwardName } = awardnameSlice.actions;
export const { changeAwardDate } = awarddateSlice.actions;
export const { changeAwardSummary } = awardsummarySlice.actions;
export const { addAwardLink, removeAwardLink} = awardbtnSlice.actions;

