// 액션
export const welcome = (mode) => ({ type: 'WELCOME' });
export const read = (id) => ({ type: 'READ', payload: id });
export const create = () => ({ type: 'CREATE' });
export const createProcess = (content) => ({
  type: 'CREATE_PROCESS',
  payload: content,
});
export const updateProcess = (content) => ({
  type: 'UPDATE_PROCESS',
  payload: content,
});
export const update = () => ({ type: 'UPDATE' });
export const deleteProcess = () => ({ type: 'DELETE_PROCESS' });

// 상태
const initstate = {
  mode: 'WELCOME',
  welcome_content: {
    title: 'Welcome',
    desc: 'Hello, Javascript for Server',
  },
  selected_content_id: null,
  max_content_id: 3,
  contents: [
    { id: 1, title: 'HTML', desc: 'HTML is ...' },
    { id: 2, title: 'CSS', desc: 'CSS is ...' },
    { id: 3, title: 'Javascript', desc: 'Javascript is ...' },
  ],
};

// 액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'WELCOME':
      return { ...state, mode: action.type };
    case 'READ':
      return {
        ...state,
        mode: action.type,
        selected_content_id: action.payload,
      };
    case 'CREATE':
      return { ...state, mode: 'CREATE' };
    case 'UPDATE':
      return { ...state, mode: 'UPDATE' };
    case 'CREATE_PROCESS': {
      let maxId = state.max_content_id + 1;
      let newContents = [...state.contents, { ...action.payload, id: maxId }];
      return {
        ...state,
        contents: newContents,
        max_content_id: maxId,
        mode: 'READ',
        selected_content_id: maxId,
      };
    }
    case 'UPDATE_PROCESS': {
      let newId = action.payload.id;
      let newContents = [...state.contents];
      newContents.map((value) => {
        if (value.id === newId) {
          value.title = action.payload.title;
          value.desc = action.payload.desc;
        }
      });

      return {
        ...state,
        contents: newContents,
        mode: 'READ',
        selected_content_id: newId,
      };
    }
    case 'DELETE_PROCESS': {
      let newContents = state.contents.filter((value) => {
        if (value.id === state.selected_content_id) return false;
        return true;
      });
      return {
        ...state,
        contents: newContents,
        mode: 'WELCOME',
        selected_content_id: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
