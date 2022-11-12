import "./App.css";
import Car from "./components/Car";
import { useReducer } from "react";

const initState = {
    isSwitchedOn: false,
    speed: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "switchOn/Off":
            return (state = {
                ...state,
                isSwitchedOn: !state.isSwitchedOn,
            });
        default:
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div className="App">
            <Car state={state} dispatch={dispatch} />
        </div>
    );
}

export default App;
