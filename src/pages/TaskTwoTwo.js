import {useState} from 'react';

function TaskTwoTwo() {
    
    const [direction,setDirection]=useState();
    const [toggleLabelOne,settoggleLabelOne]=useState("hidden");
    const [toggTickets,setTickets]=useState("hidden");
    const [toggResult,setResult]=useState("hidden");
    const [tickets,setTicketsAmount]=useState();
    const [price,setPrice]=useState(1000);
    const [convertDirection,setConvertDirection]=useState();
    const [AtoB,setAtoB]=useState(1);
    const [BtoA,setBtoA]=useState(1);


    function formatDirection(){
        switch(direction){
            case 1:
                setConvertDirection("А в В");
                setResult("hidden");
            break;
            case 2:
                setConvertDirection("В в А");
                setResult("hidden");
                break;
            case 3:
                setConvertDirection("А в В а потом в А");
                setResult("hidden");
                break;
            default:
            break;    
        };
    };

    function changeDirection (e) {        
        setDirection(e.target.value*1);
            switch(e.target.value*1){
                case 1:
                    settoggleLabelOne("unhidden");
                    
                break;
                case 2:
                    settoggleLabelOne("unhidden");
                    break;
                case 3:
                    settoggleLabelOne("unhidden");
                    break;
                default:
                break;    
            }
        formatDirection();        
    }

    const tabletArrayAtoB = [
        {id:1, time:"18:00", come:"18:50", allowToStart:4},
        {id:2, time:"18:30", come:"19:20", allowToStart:5},
        {id:3, time:"18:45", come:"19:35", allowToStart:6},
        {id:4, time:"19:00", come:"19:50", allowToStart:6},
        {id:5, time:"19:15", come:"20:05", allowToStart:6},
        {id:6, time:"21:00", come:"21:50", allowToStart:7},
        {allowToStart:7}
    ];
    const tabletArrayBtoA = [
        {id:1, time:"18:30", come:"19:20", allowToStart:false},
        {id:2, time:"18:45", come:"19:35", allowToStart:false},
        {id:3, time:"19:00", come:"19:50", allowToStart:false},
        {id:4, time:"19:15", come:"20:05", allowToStart:false},
        {id:5, time:"19:35", come:"20:25", allowToStart:false},
        {id:6, time:"21:50", come:"22:40", allowToStart:false},
        {id:7, time:"21:55", come:"22:45", allowToStart:false},
        {id:8, time:"21:55", come:"22:45", allowToStart:false}
    ];

    function convertTimezone(timeString){        
        var hours = (timeString[0]+timeString[1])*1;
        var newDate = new Date();
        var timeZone = (newDate.getTimezoneOffset()/60*-1)+hours;
        if(timeZone >= 24) {
            return ((timeZone-24)+timeString[2]+timeString[3]+timeString[4]);
        } else {return (timeZone+timeString[2]+timeString[3]+timeString[4])};
    }

    function changeTicketsVisibility () {
        setTickets("unhidden");
        setResult("hidden");
    };

    function changeResult (e) {
        setTicketsAmount(e.target.value*1);
        formatDirection();               
    };

    function calculate () {
        formatDirection();
        setResult("unhidden");
    };

    function startPointAB(e){
        setAtoB(e.target.value*1);
        
    };

    function startPointBA(e){
        setBtoA(e.target.value*1);       
    };
    

    return (
        <div className="content-task">
            <div className="form">
                <label for="time" className="labelOne">Выберите направленине</label>
                <select name="route" className="labelOne" id="route" onClick={(e)=>changeDirection(e)}>
                    <option onClick={changeTicketsVisibility} defaultValue>Укажите места</option>
                    <option value="1">из A в B</option>
                    <option value="2">из B в A</option>
                    <option value="3">из A в B и обратно в А</option>
                </select>
                <label for="time" className={"labelOne " + toggleLabelOne}>Выберите время</label>
                <br/>
                <select name="time" className={direction === 1 || direction === 3 ? "labelOne " + toggleLabelOne : "labelOne hidden"} id="time" onClick={changeTicketsVisibility}>
                    <option className={direction === 3 ? "labelOne " + toggleLabelOne : "hidden"} onClick={changeTicketsVisibility} defaultValue>Укажите время</option>
                    <option onClick={(e)=>startPointAB(e)} value="1">18:00(из A в B)</option>
                    <option onClick={(e)=>startPointAB(e)} value="2">18:30(из A в B)</option>
                    <option onClick={(e)=>startPointAB(e)} value="3">18:45(из A в B)</option>
                    <option onClick={(e)=>startPointAB(e)} value="4">19:00(из A в B)</option>
                    <option onClick={(e)=>startPointAB(e)} value="5">19:15(из A в B)</option>
                    <option onClick={(e)=>startPointAB(e)} value="6">21:00(из A в B)</option>
                </select>
                <select name="time" className={direction === 2 || direction === 3 ? "labelOne " + toggleLabelOne : "labelOne hidden"} id="time" onClick={changeTicketsVisibility}>
                    <option className={direction === 3 ? "labelOne " + toggleLabelOne : "hidden"} defaultValue >Укажите время</option>
                    <option onClick={(e)=>startPointBA(e)} className={direction !== 3 ? "" : tabletArrayAtoB[AtoB].allowToStart <= tabletArrayBtoA[1].id ? "" : "hidden" } value="1">18:30(из B в A)</option>
                    <option onClick={(e)=>startPointBA(e)} className={direction !== 3 ? "" : tabletArrayAtoB[AtoB].allowToStart <= tabletArrayBtoA[2].id ? "" : "hidden" } value="2">18:45(из B в A)</option>
                    <option onClick={(e)=>startPointBA(e)} className={direction !== 3 ? "" : tabletArrayAtoB[AtoB].allowToStart <= tabletArrayBtoA[3].id ? "" : "hidden" } value="3">19:00(из B в A)</option>
                    <option onClick={(e)=>startPointBA(e)} className={direction !== 3 ? "" : tabletArrayAtoB[AtoB].allowToStart <= tabletArrayBtoA[4].id ? "" : "hidden" } value="4">19:15(из B в A)</option>
                    <option onClick={(e)=>startPointBA(e)} className={direction !== 3 ? "" : tabletArrayAtoB[AtoB].allowToStart <= tabletArrayBtoA[5].id ? "" : "hidden" } value="5">19:35(из B в A)</option>
                    <option onClick={(e)=>startPointBA(e)} className={direction !== 3 ? "" : tabletArrayAtoB[AtoB].allowToStart <= tabletArrayBtoA[6].id ? "" : "hidden" } value="6">21:50(из B в A)</option>
                    <option onClick={(e)=>startPointBA(e)} className={direction !== 3 ? "" : tabletArrayAtoB[AtoB].allowToStart <= tabletArrayBtoA[7].id ? "" : "hidden" } value="7">21:55(из B в A)</option>
                </select>
                <br/>
                <label className={"labelOne "+toggTickets} for="num">Количество билетов</label>
                <input className={"labelOne "+toggTickets} onChange={(e)=>changeResult(e)}  type="text" id="num" />
                <br/>
                <button className={"labelOne "+toggTickets}  onClick={calculate}>Посчитать</button>
                <br/>
                <p className={"labelOne "+ toggResult}>Вы выбрали {tickets} билета по маршруту из {convertDirection},
                стоимостью: {direction ===3 ? 1200*tickets : price*tickets}р.<br/>                
                Это путешествие займет у вас {direction !== 3 ? "50" : "1 час и 40"} минут.<br/>  
                Теплоход отправляется в {direction === 1 ? convertTimezone(tabletArrayAtoB[AtoB-1].time) : direction === 2 ? convertTimezone(tabletArrayBtoA[BtoA-1].time) : direction === 3 ? convertTimezone(tabletArrayAtoB[AtoB-1].time) : "oops"},
                 а прибудет в {direction === 1 ? convertTimezone(tabletArrayAtoB[AtoB-1].come) : direction === 2 ? convertTimezone(tabletArrayBtoA[BtoA-1].come) : direction === 3 ? convertTimezone(tabletArrayBtoA[BtoA-1].come) : "oops"}.
                </p>
            </div>
        </div>
    );
};

export {TaskTwoTwo};