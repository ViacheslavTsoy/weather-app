import React, {useEffect, useState} from 'react';
import {WeatherCard} from "../../weatherCard";
import {useDispatch, useSelector} from "react-redux";
import {getWeather} from "../../../store/home/actions";
import {ReactSelect, ValueType} from "../../ReactSelect";
import styled, {css} from "styled-components";
import {Box, Button, Text, Title} from "../../basic";
import {RootState} from "../../../types";
import {useTranslation} from "react-i18next";
import {AsyncStatus} from "../../../types/enums";
import {DayProps} from "../../../store/home/types";

/*TODO process.env.REACT_APP_WEATHER_KEY*/

const key = '548882a01f49478e3be924c79f02266e';

export const WeatherWidget: React.FC = React.memo(() => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const {weatherList, countries, geo, status} = useSelector((state: RootState) => state.weather);
    const [state, setState] = useState({
        params: {
            q: geo.country_name || 'Russia',
            lang: i18n.language || 'ru',
            cnt: '40',
            units: 'metric',
            APPID: key
        }
    });

    const defaultOptions = countries.filter((item: ValueType) => item.value === geo.country_name && item);
    useEffect(() => {
        dispatch(getWeather(state.params));
    }, [setState, state]);

    const formatCards = () => {
        return weatherList.map((day: DayProps, index: number) => <WeatherCard day={day} key={index}/>)
    };

    const changeCountry = (e: ValueType) => {
        setState({
            params: {
                ...state.params,
                q: e.value
            }
        })
    };

    return (
        <Wrapper>
            <MainTitle>{t('mainTitle')}</MainTitle>
            <CityTitle>{state.params.q}</CityTitle>
            <Content status={status}>
                <FilterBox>
                    <ReactSelect
                        options={countries}
                        onChange={(e: ValueType) => changeCountry(e)}
                        defaultValue={defaultOptions[0] || {value: "Russia", label: 'Russia'}}
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

const Content = styled(Box)<{status: AsyncStatus}>`
flex-direction: column;
${props => props.status === AsyncStatus.Loading && css`
  opacity: .5;
`}
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
