import React from 'react'
import {Table} from "../../components/Table";
import {useSelector} from "react-redux";
import {RootState} from "../../types";
import {useTranslation} from "react-i18next";

export const HistoryScene: React.FC = React.memo(() => {
    const {list} = useSelector((state: RootState) => state.history);
    const {t} = useTranslation();
    const ProductsColumns = React.useMemo(() => [
            {
                Header: () => {
                    return (
                        <div>{t('columnCountry')}</div>
                    )
                },
                minWidth: 84,
                sortable: false,
                accessor: 'city',
            },
            {
                Header: () => {
                    return (
                        <div>{t('columnDate')}</div>
                    )
                },
                minWidth: 84,
                sortable: true,
                accessor: 'date',
            },
            {
                Header: () => {
                    return (
                        <div>{t('columnTemp')}</div>
                    )
                },
                minWidth: 84,
                sortable: false,
                accessor: 'temp',
            },
            {
                Header: () => {
                    return (
                        <div>{t('columnDescription')}</div>
                    )
                },
                minWidth: 84,
                sortable: false,
                accessor: 'description',
            },
        ],
        []
    );
    return (
        <div>
            <div>{t('historyTitle')}</div>
            <Table columns={ProductsColumns} data={list}/>
        </div>
    )
});

