'use client'

import { filmListStates, filmState } from '@libs/types'
import { CSSProperties } from 'react'
import styled from 'styled-components'

import { Button } from '../opt-form'

type TableProps = {
    data: filmListStates
    onEdit: (key: string, data: filmState) => void
    onDelete: (key: string) => void
}

const StyledTable = styled.table`
    border: none;
    border-collapse: collapse;
    width: 95%;
    margin: 50px auto 0;

    td,
    th {
        border: none;
    }

    td {
        padding: 20px 10px;
    }
    th {
        padding: 20px 10px;
        text-align: left;
    }

    tbody > tr {
        background-color: #efefef;
        &:hover {
            background-color: lightpink;
        }
    }
    thead > tr {
        background-color: #c2c2c2;
    }
`

const TableMarkup = ({ data, onEdit, onDelete }: TableProps) => {
    const parsedData = data ? Object.entries(data) : []
    if (!parsedData.length) return 'No Data'

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Poster Path</th>
                    <th>Backdrop Path</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {parsedData.map(([key, data]) => {
                    const btnStyled: CSSProperties = {
                        fontSize: '16px',
                        padding: '8px',
                        marginLeft: '10px',
                        height: 'auto',
                        textTransform: 'none'
                    }

                    return (
                        <tr key={key}>
                            <td>{data.title}</td>
                            <td>{data.poster_path}</td>
                            <td>{data.backdrop_path}</td>
                            <td>{data.description}</td>

                            <td style={{ display: 'flex' }}>
                                <Button
                                    style={btnStyled}
                                    onClick={() => onEdit(key, data)}
                                >
                                    Edit
                                </Button>

                                <Button
                                    style={btnStyled}
                                    onClick={() => onDelete(key)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </StyledTable>
    )
}

const Table = ({ data, onEdit, onDelete }: TableProps) => (
    <TableMarkup data={data} onEdit={onEdit} onDelete={onDelete} />
)

export default Table
