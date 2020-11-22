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
    const HistoryColumns = React.useMemo(() => [
            {
                Header: () => t('columnCountry'),
                minWidth: 205,
                sortable: false,
                accessor: 'city',
            },
            {
                Header: () => t('columnDate'),
                minWidth: 205,
                sortable: true,
                accessor: 'date',
            },
            {
                Header: () => t('columnTemp'),
                minWidth: 205,
                sortable: false,
                accessor: 'temp',
            },
            {
                Header: () => t('columnDescription'),
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
            <Table columns={HistoryColumns} data={list}/>
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

