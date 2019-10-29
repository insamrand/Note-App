const Types = {
  SAVE_NOTE: "SAVE_NOTE",
  APP_READY: "APP_READY"
};

// const saveNote2 = function(message){
//   return {
//     type: Types.SAVE_NOTE,
//     payload: message
//   }
// }

// const appReady = function() {
//   return {
//     type: Types.APP_READY,
//     payload: {}
//   };
// };

// arrowFN
const saveNote = values => {
  return {
    type: Types.SAVE_NOTE,
    payload: values
  };
};

const appReady = () => {
  return {
    type: Types.APP_READY,
    payload: {}
  };
};

export default {
  Types,
  saveNote,
  appReady
};
