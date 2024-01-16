import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "stylesheets/Footer.scss";

export default function Footer() {
    const { timerId } = useSelector((state) => state.time);
    return (
        <div className={`bottom-area ${timerId ? "hidden" : ""}`}>
            <span className="hint">
                <kbd>Tab</kbd> to restart test
            </span>
        </div>
    );
}
