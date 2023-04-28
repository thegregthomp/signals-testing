import React from "react";
const CounterContext = React.createContext({
  count: 0,
  setCount: () => {}
});

export default CounterContext;