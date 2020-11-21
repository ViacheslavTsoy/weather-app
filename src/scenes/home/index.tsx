import React, {useEffect} from 'react'
import {Box} from "../../components/basic";
import {WeatherWidget} from "../../components/home/weatherWidget";
import {getCountries, getGeoInfo} from "../../store/home/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types";

export function HomeScene() {
    const dispatch = useDispatch();
    const {geo} = useSelector((state: RootState) => state.weather);

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getGeoInfo());
    }, []);

    if(geo && !geo.country_name) {
        return null
    }

    return (
        <Box>
            <WeatherWidget/>
        </Box>
    )
}
