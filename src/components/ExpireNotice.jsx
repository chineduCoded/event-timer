import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
background-color: #282c34;
color: #fff;
`

const Content = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const Title = styled.span`
font-size: 1.875rem;
font-weight: bold;
`
const Text = styled.p`
font-size: 1.675rem;
font-weight: bold;
`

export const ExpireNotice = () => {
    return (
        <Container>
            <Content>
                <Title>Time is up!</Title>
                <Text>This session has ended.</Text>
            </Content>
        </Container>
    )
}
