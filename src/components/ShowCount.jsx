import React from 'react'
import { DateTimeDisplay } from "./DateTimeDisplay"
import { Colon } from '../style/styled'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const ShowCount = ({ hours, minutes, seconds }) => {
    return (
        <Container>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <Colon>:</Colon>
            <DateTimeDisplay value={minutes} type={'Minutes'} isDanger={false} />
            <Colon>:</Colon>
            <DateTimeDisplay value={seconds} type={'seconds'} isDanger={false} />
        </Container>
    )
}
