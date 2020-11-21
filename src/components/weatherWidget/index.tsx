import React, {useEffect, useState} from 'react';
import {Card} from "./card";
import {useDispatch, useSelector} from "react-redux";
import {getWeather} from "../../store/home/actions";
import {ReactSelect, ValueType} from "../ReactSelect";
import styled from "styled-components";
import {Box, Button, Title, Text} from "../basic";
import {RootState} from "../../types";
import i18next from 'i18next';

/*TODO move*/
const key = '548882a01f49478e3be924c79f02266e';

export const WeatherWidget: React.FC = React.memo(() => {
    const dispatch = useDispatch();
    const {list, countries, geo, history} = useSelector((state: RootState) => state.weather);
    console.log(geo);
    const [state, setState] = useState({
        params: {
            q: geo.country_name || 'Russia',
            lang: 'ru',
            cnt: '40',
            units: 'metric',
            APPID: key
        }
    });
    useEffect(() => {
        dispatch(getWeather(state.params));
    }, [setState, state]);

    const formatCards = () => {
        return list.map((day: any, index: number) => <Card day={day} key={index}/>)
    };
    console.log(history, 'history');
    return (
        <Wrapper>
            <MainTitle>Прогноз погоды на 5 дней</MainTitle>
            <CityTitle>{state.params.q}</CityTitle>
            <Content>
                <FilterBox>
                    <ReactSelect
                        options={countries}
                        onChange={(e: ValueType) => {
                            setState({
                                params: {
                                    ...state.params,
                                    q: e.value
                                }
                            })
                        }}
                    />
                </FilterBox>
                <ResultBox>
                    {formatCards()}
                </ResultBox>
            </Content>
        </Wrapper>
    )
});

const Wrapper = styled(Box)`
flex-direction: column;
align-items: center;
`;

const MainTitle = styled(Title)`
text-align: center;
`;

const CityTitle = styled(Text)`

`;

const Content = styled(Box)`
flex-direction: column;
`;

const FilterBox = styled(Box)`

`;

const ResultBox = styled(Box)`
align-items: center;
margin-top: 32px;
flex-wrap: wrap;
justify-content: center;
`;

const ButtonBox = styled(Button)`

`;
