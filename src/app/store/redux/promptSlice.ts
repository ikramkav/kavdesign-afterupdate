// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface PromptState {
//   promptText: string;
//   result: string;
//   heading?: string;
//   paragraph?: string;
// }

// const initialState: PromptState = {
//   promptText: "",
//   result: "",
//   heading: "",
//   paragraph: "",
// };

// const promptSlice = createSlice({
//   name: "prompt",
//   initialState,
//   reducers: {
//     setPromptData: (
//       state,
//       action: PayloadAction<{ promptText: string; result: string }>
//     ) => {
//       state.promptText = action.payload.promptText;
//       state.result = action.payload.result;
//     },
//     clearPromptData: (state) => {
//       state.promptText = "";
//       state.result = "";
//     },
//   },
// });

// export const { setPromptData, clearPromptData } = promptSlice.actions;
// export default promptSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromptState {
  promptText: string;
  result: string;
  heading?: string;
  paragraph?: string;
  subHeading?: string;
  subParagraph?: string;
  tableContent?: string;
}

const initialState: PromptState = {
  promptText: "",
  result: "",
  heading: "",
  paragraph: "",
  subHeading: "",
  subParagraph: "",
  tableContent: "",
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPromptData: (
      state,
      action: PayloadAction<{
        promptText: string;
        result: string;
        heading?: string;
        paragraph?: string;
        subHeading?: string;
        subParagraph?: string;
        tableContent?: string;
      }>
    ) => {
      state.promptText = action.payload.promptText;
      state.result = action.payload.result;
      if (action.payload.heading) state.heading = action.payload.heading;
      if (action.payload.paragraph) state.paragraph = action.payload.paragraph;
      if (action.payload.subHeading)
        state.subHeading = action.payload.subHeading;
      if (action.payload.tableContent)
        state.tableContent = action.payload.tableContent;
      if (action.payload.subParagraph)
        state.subParagraph = action.payload.subParagraph;
    },
    clearPromptData: (state) => {
      state.promptText = "";
      state.result = "";
      state.heading = "";
      state.paragraph = "";
      state.subHeading = "";
      state.tableContent = "";
      state.subParagraph = "";
    },
  },
});

export const { setPromptData, clearPromptData } = promptSlice.actions;
export default promptSlice.reducer;
