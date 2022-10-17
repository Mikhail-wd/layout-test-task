import {useState, useMemo} from "react";


function TaskTwo() {
    const [startSate,setStartSate] = useState(parseInt(Date.now().toString(10).slice(-8)));
    const [barCodeArray,setBarCode] = useState([]);
    function barCodeId(){
        let array =[];

        for(var x=0; x<18; x++){
            array[x]=startSate+x;
        }
        setBarCode(array)
    }
    useMemo(()=>barCodeId(),[])
    return (
        
        <div className="content-task">
                <table className="tickets-tablet">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>event_id</th>
                            <th>event_date</th>
                            <th>ticket_adult_price</th>
                            <th>ticket_adult_quantity</th>
                            <th>ticket_kid_price</th>
                            <th>ticket_kid_quantity</th>
                            <th>barcode</th>
                            <th>user_id</th>
                            <th>equal_price</th>
                            <th>created</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>003</td>
                            <td>2021-08-21 13:00:00</td>
                            <td>700</td>
                            <td>1</td>
                            <td>450</td>
                            <td>0</td>
                            <td>11111111<br/></td>
                            <td>00451</td>
                            <td>700 </td>
                            <td>2021-01-11 13:22:09</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>006</td>
                            <td>2021-07-29 18:00:00</td>
                            <td>1000</td>
                            <td>0</td>
                            <td>800</td>
                            <td>2</td>
                            <td>22222222</td>
                            <td>00364</td>
                            <td>1600 </td>
                            <td>2021-01-12 16:62:08</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>003</td>
                            <td>2021-08-15 17:00:00</td>
                            <td>700</td>
                            <td>4</td>
                            <td>450</td>
                            <td>3</td>
                            <td>33333333</td>
                            <td>00015</td>
                            <td>4150 </td>
                            <td>2021-01-13 10:08:45</td>
                        </tr>
                    </tbody>
                </table>
                <br/>                
                <p className="content-text"> Предположу что для льготного и группового условия будет дополнительный столбец для ребенка и взрослого , пусть они означают 1 для льготного 2 для
                    группового и 0 для обычного состояния. Тогда таблица будет выглядеть так :</p><br/>
                <table className="tickets-tablet">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>event_id</th>
                            <th>event_date</th>
                            <th>ticket_adult_price</th>
                            <th>ticket_adult_quantity</th>
                            <th>ticket_adult_value</th>
                            <th>ticket_kid_price</th>                        
                            <th>ticket_kid_quantity</th>
                            <th>ticket_kid_value</th>
                            <th>barcode</th>
                            <th>user_id</th>
                            <th>equal_price</th>
                            <th>created</th>                        
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>003</td>
                        <td>2021-08-21 13:00:00</td>
                        <td>700</td>
                        <td>1</td>
                        <td>0</td>
                        <td>450</td>
                        <td>0</td>
                        <td>0</td>
                        <td>11111111</td>
                        <td>00451</td>
                        <td>700 </td>
                        <td>2021-01-11 13:22:09</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>006</td>
                        <td>2021-07-29 18:00:00</td>
                        <td>1000</td>
                        <td>0</td>
                        <td>0</td>
                        <td>800</td>
                        <td>2</td>
                        <td>0</td>
                        <td>22222222</td>
                        <td>00364</td>
                        <td>1600 </td>
                        <td>2021-01-12 16:62:08</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>003</td>
                        <td>2021-08-15 17:00:00</td>
                        <td>700</td>
                        <td>4</td>
                        <td>0</td>
                        <td>450</td>
                        <td>3</td>
                        <td>0</td>
                        <td>33333333</td>
                        <td>00015</td>
                        <td>4150 </td>
                        <td>2021-01-13 10:08:45</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>003</td>
                        <td>2021-08-21 13:00:00</td>
                        <td>700</td>
                        <td>1</td>
                        <td>1</td>
                        <td>450</td>
                        <td>1</td>
                        <td>1</td>
                        <td>44444444<br/></td>
                        <td>00311</td>
                        <td>1150 </td>
                        <td>2021-01-15 14:55:09</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>003</td>
                        <td>2021-08-21 13:00:00</td>
                        <td>700</td>
                        <td>0</td>
                        <td>0</td>
                        <td>450</td>
                        <td>6</td>
                        <td>2</td>
                        <td>55555555<br/></td>
                        <td>00211</td>
                        <td>2600</td>
                        <td>2021-01-16 18:22:09</td>
                    </tr>
                    </tbody>
                </table>
                <br/>                
                <p className="content-text"> В голову пришло только использовать по генерации относительно текушего времени с 
                помощью функции Date.now(). Так можно сделать уникальный barcode для каждого билета. Допускаю что он может быть 
                сделан с текущей дыта заказа или согласно серверному времени :</p><br/>
                <table className="tickets-tablet">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>event_id</th>
                        <th>event_date</th>
                        <th>ticket_adult_price</th>
                        <th>ticket_adult_quantity</th>
                        <th>ticket_adult_value</th>
                        <th>ticket_kid_price</th>                        
                        <th>ticket_kid_quantity</th>
                        <th>ticket_kid_value</th>
                        <th>barcode</th>
                        <th>user_id</th>
                        <th>equal_price</th>
                        <th>created</th>                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>003</td>
                        <td>2021-08-21 13:00:00</td>
                        <td>700</td>
                        <td>1</td>
                        <td>0</td>
                        <td>450</td>
                        <td>0</td>
                        <td>0</td>
                        <td>{(barCodeArray.splice(17)).map((item)=>item+" ")}</td>
                        <td>00451</td>
                        <td>700 </td>
                        <td>2021-01-11 13:22:09</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>006</td>
                        <td>2021-07-29 18:00:00</td>
                        <td>1000</td>
                        <td>0</td>
                        <td>0</td>
                        <td>800</td>
                        <td>2</td>
                        <td>0</td>
                        <td>{(barCodeArray.splice(15)).map((item)=>item+" ")}</td>
                        <td>00364</td>
                        <td>1600 </td>
                        <td>2021-01-12 16:62:08</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>003</td>
                        <td>2021-08-15 17:00:00</td>
                        <td>700</td>
                        <td>4</td>
                        <td>0</td>
                        <td>450</td>
                        <td>3</td>
                        <td>0</td>
                        <td>{(barCodeArray.splice(8)).map((item)=>item+" ")}</td>
                        <td>00015</td>
                        <td>4150 </td>
                        <td>2021-01-13 10:08:45</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>003</td>
                        <td>2021-08-21 13:00:00</td>
                        <td>700</td>
                        <td>1</td>
                        <td>1</td>
                        <td>450</td>
                        <td>1</td>
                        <td>1</td>
                        <td>{(barCodeArray.splice(6)).map((item)=>item+" ")}</td>
                        <td>00311</td>
                        <td>1150 </td>
                        <td>2021-01-11 13:22:09</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>003</td>
                        <td>2021-08-21 13:00:00</td>
                        <td>700</td>
                        <td>0</td>
                        <td>0</td>
                        <td>450</td>
                        <td>6</td>
                        <td>2</td>
                        <td>{(barCodeArray.splice(0)).map((item)=>item+" ")}</td>
                        <td>00211</td>
                        <td>2600</td>
                        <td>2021-01-16 18:22:09</td>
                    </tr>
                    </tbody>
                </table>
                <p className="content-text">*Прошу заметить что это только мои догадки. Мне в основном приходилось работать стем, что приходит с сервераи или отправлять данные на уже известные поля.</p>
        </div>
    );
};

export {TaskTwo};