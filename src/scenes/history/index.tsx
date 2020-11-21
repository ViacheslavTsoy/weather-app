import React from 'react';
import { Table } from '../../components/Table';
import { useSelector } from 'react-redux';
import { RootState } from '../../types';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Box, Title } from '../../components/basic';
import styled from 'styled-components';

export const HistoryScene: React.FC = React.memo(() => {
    const { list } = useSelector((state: RootState) => state.history);
    const { t } = useTranslation();
    const ProductsColumns = React.useMemo(() => [
            {
                Header: () => {
                    return (
                        <div>{t('columnCountry')}</div>
                    );
                },
                minWidth: 205,
                sortable: false,
                accessor: 'city',
            },
            {
                Header: () => {
                    return (
                        <div>{t('columnDate')}</div>
                    );
                },
                minWidth: 205,
                sortable: true,
                accessor: 'date',
            },
            {
                Header: () => {
                    return (
                        <div>{t('columnTemp')}</div>
                    );
                },
                minWidth: 205,
                sortable: false,
                accessor: 'temp',
            },
            {
                Header: () => {
                    return (
                        <div>{t('columnDescription')}</div>
                    );
                },
                minWidth: 205,
                sortable: false,
                accessor: 'description',
            },
        ],
        [],
    );
    return (
        <HistoryWrapper>
            <NavLink to={'/'}>{`< Back`}</NavLink>
            <MainTitle>{t('historyTitle')}</MainTitle>
            <Table columns={ProductsColumns} data={list}/>
        </HistoryWrapper>
    );
});

const HistoryWrapper = styled(Box)`
flex-direction: column;
`;

const MainTitle = styled(Title)`
text-align: center;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 39px;
color: #131C44;
margin-bottom: 16px;
`;

