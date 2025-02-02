import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Button from "react-bootstrap/Button";

export default function Car({ state, dispatch }) {
    return (
        <div className="car">
            {state.isSwitchedOn ? (
                <ReactSpeedometer
                    value={state.speed}
                    currentValueText={`${state.speed} Km/h`}
                />
            ) : (
                <h1 style={{ textAlign: "center" }}>Ausgeschalten</h1>
            )}
            <Button
                className="btn"
                onClick={() => dispatch({ type: "switchOn/Off" })}
            >
                {state.isSwitchedOn ? "Ausschalten" : "Anschalten"}
            </Button>
            <Button
                className="btn"
                onClick={() => dispatch({ type: "accelerate" })}
            >
                Gas geben
            </Button>
            <Button className="btn" onClick={() => dispatch({ type: "break" })}>
                Bremsen
            </Button>
            <Button
                className="btn"
                onClick={() => dispatch({ type: "machtNull" })}
            >
                Speed 0
            </Button>
        </div>
    );
}
