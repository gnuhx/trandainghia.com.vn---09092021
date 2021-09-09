import { Button } from '@material-ui/core/';
import { Link } from "react-router-dom";
import React from 'react';
import Quiz_1 from './quiz/1';
import Quiz_2 from './quiz/2';
import Quiz_3 from './quiz/3';
import Quiz_4 from './quiz/4';
import Quiz_5 from './quiz/5';
import Quiz_6 from './quiz/6';
import Quiz_7 from './quiz/7';
import Quiz_8 from './quiz/8';
import Quiz_9 from './quiz/9';
import Quiz_10 from './quiz/10';
import Quiz_11 from './quiz/11';
import Quiz_12 from './quiz/12';
import Quiz_13 from './quiz/13';
import Quiz_14 from './quiz/14';
import Quiz_15 from './quiz/15';
import Quiz_16 from './quiz/16';
import Quiz_17 from './quiz/17';
import Quiz_18 from './quiz/18';
import Quiz_19 from './quiz/19';
import Quiz_20 from './quiz/20';

const Linear =({history})=>{
    return(
        <>
            <div className="task-container">
            <Button  to='/' className="button-header-wrapper" style={{"background-color" :"orange"}} component={Link} variant="contained" color="primary">TRANG CHỦ</Button>
            <Button  to='money' className="button-header-wrapper" style={{"background-color" :"orange"}} component={Link} variant="contained" color="primary">CHỦ ĐỀ TIẾP THEO</Button>
            </div>
            <div className = "header text-center">
                <h1>LINEAR EQUATION PROBLEMS</h1>
            </div>
            <Quiz_1/>
            <Quiz_2/>
            <Quiz_3/>
            <Quiz_4/>
            <Quiz_5/>
            <Quiz_6/>
            <Quiz_7/>
            <Quiz_8/>
            <Quiz_9/>
            <Quiz_10/>
            <Quiz_11/>
            <Quiz_12/>
            <Quiz_13/>
            <Quiz_14/>
            <Quiz_15/>
            <Quiz_16/>
            <Quiz_17/>
            <Quiz_18/>
            <Quiz_19/>
            <Quiz_20/>

        </>
    )
};
export default Linear;