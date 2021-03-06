import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Box, Title, Text } from '../basic';
import { DayProps } from '../../store/home/types';
import { theme } from '../../styles/theme';

interface Props {
    day: DayProps;
}

export const WeatherCard: React.FC<Props> = React.memo(({ day }) => {
    const { dt_txt, main, weather } = day;
    const { t } = useTranslation();
    const weekdayName = moment(dt_txt).format('dddd');

    return (
        <Wrapper>
            <Title fontWeight="600" textDecoration="underline">{t(weekdayName)}</Title>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon || '10d'}@2x.png`} alt="icon"/>
            <Text fontSize="16px" fontWeight="600">{Math.round(main.temp)} °C</Text>
            <Box mt="5px" justifyContent="center">{t(weather[0].id)}</Box>
        </Wrapper>
    );
});

const Wrapper = styled(Box)`
flex-direction: column;
max-width: 160px;
align-items: center;
justify-content: center;
padding: 20px;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
margin: 10px;
background: ${theme.colors.white};
box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
border-radius: 10px;
background: #ffffff47;
:first-of-type {
margin-left: 0;
}
:last-of-type {
margin-right: 0;
}
`;
