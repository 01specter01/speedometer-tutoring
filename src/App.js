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
            if (state.isSwitchedOn === false) {
                state = {
                    ...state,
                    speed: 0,
                };
            }
            return (state = {
                ...state,
                isSwitchedOn: !state.isSwitchedOn,
            });
        case "accelerate":
            return (state = {
                ...state,
                speed: state.speed + 5,
            });
        case "break":
            return (state = {
                ...state,
                speed: state.speed - 5,
            });
        case "machtNull":
            return (state = {
                ...state,
                speed: 0,
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
