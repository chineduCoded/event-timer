import React, { useState } from 'react'
import { Button, ButtonContainer, Form, FormInput, HomeContainer, HomeTitle } from '../style/styled'
import { useNavigate } from "react-router-dom"
import { useTimer } from '../context/CountDownContext'


export const HomeScreen = () => {
    const { timer, setTimer } = useTimer()
    const [inputTime, setInputTime] = useState(timer)
    console.log(inputTime * 60 * 1000);
    const navigate = useNavigate()

    const handleStart = (e) => {
        e.preventDefault()
        // setTimer(new Date().getTime + timer)
        navigate("/countdown")
    }
    return (
        <HomeContainer>
            <HomeTitle>Time Allotment</HomeTitle>
            <p>{inputTime}</p>
            <Form>
                <FormInput
                    type="time"
                    step="2"
                    value={inputTime}
                    onChange={(e) => setInputTime(e.target.value)}
                />
                <ButtonContainer>
                    <Button clr type="button" onClick={handleStart}>Start</Button>
                    <Button type="reset">Reset</Button>
                </ButtonContainer>
            </Form>
        </HomeContainer>
    )
}
