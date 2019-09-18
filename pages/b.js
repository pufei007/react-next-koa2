import React, {
  useState,
  useReducer,
  useLayoutEffect,
  useEffect,
  useRef,
  useContext,
  memo,
  useMemo,
  useCallback
} from "react";
import MyContext from "../lib/my-context";
class Mycount extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

function countReducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

function MyCountFunc() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);
  const [name, setName] = useState("feigo");
  const context = useContext(MyContext);

  const inputRef = useRef();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount(count => count + 1);
  //     dispatch({ type: "add" });
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    console.log(2);
    console.log(inputRef);
    return () => {
      console.log("33");
    };
  }, [name]);

  //
  useLayoutEffect(() => {
    console.log(2);
    return () => {
      console.log("33");
    };
  }, [name]);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <span
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        {count}
      </span>
      <p>{context}</p>
    </div>
  );
}

export default MyCountFunc;
