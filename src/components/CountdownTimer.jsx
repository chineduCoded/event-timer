import React from 'react'
import { useTimer } from '../context/CountDownContext'
import { useCountdown } from '../hooks/useCountdown'
import { Container, CountDown } from '../style/styled'
import { ExpireNotice } from './ExpireNotice'
import { ShowCount } from './ShowCount'

export const CountdownTimer = () => {
    const { timer } = useTimer()
    const { hours, minutes, seconds } = useCountdown(timer)

    if (hours + minutes + seconds <= 0) {
        return <ExpireNotice />
    } else {
        return (
            <CountDown>
                <Container>
                    <ShowCount
                        hours={hours > 9 ? hours : '0' + hours}
                        minutes={minutes > 9 ? minutes : '0' + minutes}
                        seconds={seconds > 9 ? seconds : '0' + seconds} />
                </Container>
            </CountDown>
        )
    }
    // return (
    //     <CountDown>
    //         <Container>
    //             <ShowCount
    //                 hours={hours}
    //                 minutes={minutes}
    //                 seconds={seconds} />
    //         </Container>
    //     </CountDown>
    // )

}
