import React from 'react';
import {Box} from "../../basic";
import styled from "styled-components";

interface Props {
    day: any
}

export const Card: React.FC<Props> = React.memo((props: any) => {
    console.log(props);
    const ms = props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

    return (
        <Wrapper>
            <h3 className="card-title">{weekdayName}</h3>
            <img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon || '10d'}@2x.png`} alt='icon'/>
            <h2>{Math.round(props.day.main.temp)} °C</h2>
            <div className="card-body">
                <button className="btn btn-dark btn-outline-light">{props.day.weather[0].description}</button>
            </div>
        </Wrapper>
    )
});

const Wrapper = styled(Box)`
flex-direction: column;
max-width: 200px;
align-items: center;
justify-content: center;
padding: 20px;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
margin: 10px;
background: #FFFFFF;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
border-radius: 10px;
`;
