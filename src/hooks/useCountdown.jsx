import { useState, useEffect } from "react"

const useCountdown = (targetTime) => {
    const countDownTime = new Date(targetTime).getTime()
    const [countDown, setCountDown] = useState(countDownTime - new Date().getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownTime - new Date().getTime())
        }, 1000)

        return () => clearInterval(interval)
    }, [countDownTime])

    return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
    const hours = Math.floor((countDown / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((countDown / 1000 / 60) % 60)
    const seconds = Math.floor((countDown / 1000) % 60)

    return { hours, minutes, seconds }
}

export { useCountdown }