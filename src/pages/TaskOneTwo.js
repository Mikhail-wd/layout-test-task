import Before from "../img/before.png";
import After from "../img/after.png";

function TaskOneTwo() {
    return (
        <div className="content-task">
            <div className="task-one-two">
                <p>Возможное решение это добавление свойсва (overflow-x: hidden;) к самому документу в CSS.</p>
                <br />
                <img src={Before} alt='before' />
                <img src={After} alt='after' />
            </div>
        </div>
    );
};

export {TaskOneTwo};