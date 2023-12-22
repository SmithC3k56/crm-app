import { createMachine } from "xstate";

export const searchMachine = createMachine({
 id:'search',
 initial:'close',
 states:{
  close:{
   on:{
    OPEN:{
     target: 'open'
    }
   }
  },
  open:{
   on:{
    CLOSE:{
     target: 'close'
    }
  }
 }
}
});