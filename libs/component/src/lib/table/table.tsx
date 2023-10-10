'use client'

import { CSSProperties } from 'react'
import styled from 'styled-components'

import { Button } from '../opt-form'

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

const TableMarkup = ({ data, onEdit, onDelete }) => (
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
            {data.map((item, index) => {
                const btnStyled: CSSProperties = {
                    fontSize: '16px',
                    padding: '8px',
                    marginLeft: '10px',
                    height: 'auto',
                    textTransform: 'none'
                }
                console.log('item', item)

                return (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.poster_path}</td>
                        <td>{item.backdrop_path}</td>
                        <td>{item.description}</td>

                        <td style={{ display: 'flex' }}>
                            <Button style={btnStyled} onClick={onEdit}>
                                Edit
                            </Button>
                            <Button style={btnStyled} onClick={onDelete}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </StyledTable>
)

const Table = ({ data, onEdit, onDelete }) => (
    <TableMarkup data={data} onEdit={onEdit} onDelete={onDelete} />
)

export default Table
