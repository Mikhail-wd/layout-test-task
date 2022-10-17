import Brige from "../img/brige.png";
import Clock from "../img/icons/clock-circular-outline.svg";
import Check from "../img/icons/check-mark.svg";
import Currenc from "../img/icons/value-money.svg";
import {useState} from "react";
import PhonBanner from "../img/sankt.png";

function TaskOne() {

    const [change, setChange] = useState(true);

    function ToggleHide(){
        setChange(!change);
    }


    return (
        <div className="content-task">

            <div className="desktop plate short">
                <img className="plate-banner" src={Brige} alt="brige" />
                <span className="new">Новинка</span>
                <div className="plate-left-colum">
                    <p>Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020</p>
                    <p className="time"><img className="clock" src={Clock} alt="time" />2 часа</p>
                    <ul className="colum-list">
                        <li><img src={Check} alt="check-mark" />Билет на целый день</li>
                        <li><img src={Check} alt="check-mark" />Неограниченное число катаний</li>
                        <li><img src={Check} alt="check-mark" />6 остановок у главных достопримечательностей</li>
                        <li><img src={Check} alt="check-mark" />Ближайший рейс сегодня<span>12:00</span><span>12:00</span><span>12:00</span></li>
                    </ul>
                    <div className="price">
                        <div>900<img src={Currenc} alt="money"/></div>
                        <div>1200<img src={Currenc} alt="money"/> на причале</div>                    
                    </div>
                    <div className="settings">Подробнee</div>
                </div>                
            </div>

            <div className="desktop plate full">
                <img className="plate-banner" src={Brige} alt="brige" />
                <span className="year">Круглый год</span>
                <div className="plate-left-colum">
                    <p>Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020</p>
                    <p className="time"><img className="clock" src={Clock} alt="time" />2 часа</p>
                    <ul className="colum-list">
                        <li><img src={Check} alt="check-mark" />Билет на целый день</li>
                        <li><img src={Check} alt="check-mark" />Неограниченное число катаний</li>
                        <li><img src={Check} alt="check-mark" />6 остановок у главных достопримечательностей</li>
                        <li><img src={Check} alt="check-mark" />Ближайший рейс сегодня<span>12:00</span><span>12:00</span><span>12:00</span><span>12:00</span></li>
                    </ul>
                    <div className="price">
                        <div>900<img src={Currenc} alt="money"/></div>
                        <div>1200<img src={Currenc} alt="money"/> на причале</div>                   
                    </div>
                    <div className="settings">Подробнee</div>
                </div>                
            </div>

            <div className="desktop plate full">
                <img className="plate-banner" src={Brige} alt="brige" />
                <div className="plate-left-colum">
                    <p>Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020</p>
                    <p className="time"><img className="clock" src={Clock} alt="time" />2 часа</p>
                    <ul className="colum-list">
                        <li><img src={Check} alt="check-mark" />Билет на целый день</li>
                        <li><img src={Check} alt="check-mark" />Неограниченное число катаний</li>
                        <li><img src={Check} alt="check-mark" />6 остановок у главных достопримечательностей</li>
                        <li><img src={Check} alt="check-mark" />Ближайший рейс сегодня<span>12:00</span><span>12:00</span><span>12:00</span><span onClick={ToggleHide}>{change ? "еще..." : "скрыть"}</span></li>
                        <li className={change ? "hidden" : "unhidden"}><span>12:00</span><span>12:00</span><span>12:00</span><span>12:00</span><span>12:00</span><span>12:00</span></li>
                    </ul>
                    <div className="price">
                        <div>900<img src={Currenc} alt="money"/></div>
                        <div>1200<img src={Currenc} alt="money"/> на причале</div>                    
                    </div>
                    <div className="settings">Подробнee</div>
                </div>                
            </div>

            <div className="cellphone">
                <img src={PhonBanner} className="phon-plate-banner" alt="Питер"/>
                <span className="new">Новинка</span>
                <p className="time"><img className="clock" src={Clock} alt="time" />2 часа</p>
                <p>АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</p>
                <ul className="colum-list-marks">
                        <li><img src={Check} alt="check-mark" /></li>
                        <li><img src={Check} alt="check-mark" /></li>
                        <li><img src={Check} alt="check-mark" /></li>
                        <li><img src={Check} alt="check-mark" /></li>
                </ul>
                <ul className="colum-list">
                        <li>Билет на целый день</li>
                        <li>Неограниченное число катаний</li>
                        <li>6 остановок у главных достопримечательностей</li>
                        <li>Ближайший рейс сегодня</li>
                        <li><span>12:00</span><span>12:00</span><span>12:00</span><span>12:00</span></li>
                </ul>
               
                <div className="price">
                    <div>900<img src={Currenc} alt="money"/></div>
                    <div>1200 p на причале</div>                    
               </div>
               <div className="settings">Подробнee</div>
            </div>

            <div className="cellphone">
                <img src={PhonBanner} className="phon-plate-banner" alt="Питер"/>
                <span className="hot-new">Новинка</span>
                <p className="time"><img className="clock" src={Clock} alt="time" />2 часа</p>
                <p>АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</p>
                <ul className="colum-list-marks">
                        <li><img src={Check} alt="check-mark" /></li>
                        <li><img src={Check} alt="check-mark" /></li>
                        <li><img src={Check} alt="check-mark" /></li>
                        <li><img src={Check} alt="check-mark" /></li>
                </ul>
                <ul className="colum-list">
                        <li>Билет на целый день</li>
                        <li>Неограниченное число катаний</li>
                        <li>6 остановок у главных достопримечательностей</li>
                        <li>Ближайший рейс сегодня</li>
                        <li><span>12:00</span><span>12:00</span><span>12:00</span><span>12:00</span></li>
                </ul>
               
                <div className="price">
                    <div>2900<img src={Currenc} alt="money"/></div>
                    <div>1200 p на причале</div>                    
               </div>
               <div className="settings huge">Подробнee</div>
            </div>
        </div>
    );
};

export {TaskOne};