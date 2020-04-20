export const loading = () => {
    return {
      type: "LOADING"
    };
  };
  
  export const MUL5Asnc = val => {
    return { type: "MUL5", value: val };
  };
  
  export const MUL5 = val => {
    return dispach => {
      dispach(loading());
      setTimeout(() => {
        dispach(MUL5Asnc(val));
      }, 5000);
    };
  };
  
  export const MUL2 = val => {
    return { type: "MUL2", value: val };
  };
  