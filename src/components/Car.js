import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Button from "react-bootstrap/Button";

export default function Car({ state, dispatch }) {
    return (
        <div className="car">
            {state.isSwitchedOn && (
                <ReactSpeedometer
                    value={state.speed}
                    currentValueText={`${state.speed} Km/h`}
                />
            )}
            <Button onClick={() => dispatch({ type: "switchOn/Off" })}>
                {state.isSwitchedOn ? "Ausschalten" : "Anschalten"}
            </Button>
            <Button onClick={() => dispatch({ type: "accelerate" })}>
                Gas geben
            </Button>
            <Button onClick={() => dispatch({ type: "break" })}>Bremsen</Button>
            <Button onClick={() => dispatch({ type: "machtNull" })}>
                Speed 0
            </Button>
        </div>
    );
}
