import { createMachine } from "xstate";

export const productMachine = createMachine({
 id: 'skeleton',
 initial: 'loading',
 states: {
  loading: {
   after:{
    3000:{
     target: 'loaded'
    }
   }
   ,on: {
    LOADINGDATA: {
     target: 'loaded',
    }
   }
  },
  loaded: {
   on: {
    LOADEDDATA: {
     target: 'loading'
    }
   }
  }
 }
});