import React from 'react'
import { DisplayBox, Time, Title } from '../style/styled'

export const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <>
            <DisplayBox>
                <Time>{value}</Time>
                <Title>{type}</Title>
            </DisplayBox>
        </>
    )
}
