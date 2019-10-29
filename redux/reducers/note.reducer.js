import actions from "./actions";

const initialState = {
  username: "Mack",
  notes: [
    {
      title: "Harry Potter",
      text:
        "Harry James Potter (b. 31 July 1980 ) was an English half-blood wizard, one of the most famous wizards of modern times. He was the only child and son of James and Lily Potter",
      url: "https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg"
    },
    {
      title: "Hermione Granger",
      text:
        "Minister Hermione Jean Granger (b. 19 September, 1979 ) was an English Muggle-born witch born to Mr and Mrs Granger. At the age of eleven, she learned about her magical nature and had been accepted",
      url: "https://timedotcom.files.wordpress.com/2015/04/emma-watson-23.jpg"
    },
    {
      title: "Ronald Weasley",
      text:
        "Ronald Bilius Ron Weasley (b. 1 March, 1980) was an English pure-blood wizard, the sixth and youngest son of Arthur and Molly Weasley. He was also the younger brother of Bill, Charlie, Percy, Fred, George, and the elder brother of Ginny. Ron and his brothers and sister lived at the Burrow, on the outskirts of Ottery St Catchpole.",
      url:
        "https://images.pottermore.com/bxd3o8b291gf/4kRGmTOvVYmIwsOikwcuUw/8b8f2e4ffcc1a5218bafe615f976abb0/Ron_Weasley_WB_F1_Ron_with_Scabbers_on_shoulder_00393692.jpg?w=1200"
    }
  ]
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.Types.APP_READY: {
      console.log("Application Ready");
      return { ...state };
    }

    case actions.Types.SAVE_NOTE: {
      console.log("Have a saving noted: ", payload);

      let newNotes = [...state.notes, {...payload}];
      // newNotes.push({
      //   title: payload.tile,
      //   text: payload.text,
      //   url: payload.url
      // });

      return {
        ...state,
        notes: newNotes
      };
    }

    case "typeName":
      return { ...state, ...payload };

    default:
      return state;
  }
};
