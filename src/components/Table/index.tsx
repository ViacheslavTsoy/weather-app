import React from 'react';
import styled from "styled-components";
import {Box} from "../basic";
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {theme} from "../../styles/theme";
import {useTranslation} from "react-i18next";

export type TableProps = {
    data: Array<{}>;
    columns: Array<{}>;
    onRowClick?: (id: string) => void;
};

export function Table({data, columns}: TableProps) {
    const {t} = useTranslation();
    const translations = {
        previousText: t('tablePrev'),
        nextText: t('tableNext'),
        noDataText: t('tableEmpty'),
        pageText: t('tablePage'),
        ofText: t('tableOf')
    };
    return (
        <TableWrapper>
            <ReactTable
                {...translations}
                data={data}
                columns={columns}
                showPagination={true}
                pageSize={10}
                showPageSizeOptions={false}
            />
        </TableWrapper>
    );
}

const TableWrapper = styled(Box)`
.ReactTable .rt-thead .rt-th.-sort-desc, .ReactTable .rt-thead .rt-td.-sort-desc {
box-shadow: none !important;
}
.rt-resizable-header-content {
overflow: visible !important;
text-align: left;
}
.ReactTable .rt-thead .rt-th.-sort-asc, .ReactTable .rt-thead .rt-td.-sort-asc {
box-shadow: none !important;
}
.ReactTable .rt-tbody .rt-td {
border-right: 0;
}
.ReactTable {
width: 100%;
padding: 29px 17px;
}
.rt-thead {
box-shadow: none !important;
margin-bottom: 17px;

font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: ${theme.colors.blue};
    .rt-tr {
    background: rgba(243, 243, 243, 0.4);
    align-items: center;
    min-height: 56px;
    padding-left: 17px;
        .rt-th {
          border-right: 0;
           .rt-resizer {
          width: 0
          }
          }
        }
    }
}
.rt-tbody {
.rt-tr-group {
max-height: 90px;
}
.rt-td {
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: ${theme.colors.blue};
}
padding-left: 17px;
::-webkit-scrollbar {
    height: 12px;
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
  }
    .rt-td {
    overflow: visible;
    display: flex;
    align-items: center;
    }
}`;
