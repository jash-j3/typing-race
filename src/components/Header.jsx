import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setTheme,
    setTime,
    setType,
    setWordList,
    timerSet,
} from "store/actions";
import "stylesheets/Header.scss";

export default function Header() {
    const {
        time: { timerId },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const theme = "terminal";
        const type = "sentences";
        const time = parseInt("60", 10);
        import(`wordlists/sentences.json`).then((words) =>
            dispatch(setWordList(words.default))
        );
        dispatch(timerSet(time));
        dispatch(setType(type));
        dispatch(setTime(time));
        dispatch(setTheme(theme));
    }, [dispatch]);

    // Set Theme
    useEffect(() => {
        if ("termial") {
            document.querySelector(".theme")?.childNodes.forEach((el) => {
                if (el instanceof HTMLButtonElement)
                    el.classList.remove("selected");
            });
            document
                .querySelector(`button[value="termial"]`)
                ?.classList.add("selected");
            document.body.children[1].classList.add("terminal");
        }
    }, [dispatch]);

    return (
        <header className={timerId ? "hidden" : undefined}>
            <a href="." className="brand">
                typing-test
            </a>

        </header>
    );
}
