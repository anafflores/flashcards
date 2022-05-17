import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: quizzes,
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuizz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
    
});

export const addQuizForTopicId = (quiz) => {
    const {topicId, id} = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
      };
};


export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;