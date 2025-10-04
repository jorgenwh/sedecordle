import { useEffect, useState } from 'react'

interface ScreenFlashProps {
    type: 'correct' | 'incorrect' | null
    onComplete: () => void
}

export const ScreenFlash = ({ type, onComplete }: ScreenFlashProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)

    useEffect(() => {
        if (type) {
            setIsVisible(true)
            setIsFadingOut(false)

            const fadeOutTimer = setTimeout(() => {
                setIsFadingOut(true)
            }, 50)

            const completeTimer = setTimeout(() => {
                setIsVisible(false)
                setIsFadingOut(false)
                onComplete()
            }, 350)

            return () => {
                clearTimeout(fadeOutTimer)
                clearTimeout(completeTimer)
            }
        }
    }, [type, onComplete])

    if (!type || !isVisible) return null

    const bgColor = type === 'correct' ? 'bg-green-500' : 'bg-red-500'
    const opacityClass = isFadingOut ? 'opacity-0' : 'opacity-20'

    return (
        <div
            className={`fixed inset-0 ${bgColor} ${opacityClass} pointer-events-none z-50 transition-opacity duration-300`}
        />
    )
}
