import { useEffect, useState } from 'react'

type Props = {}

const TypingIntro = (props: Props) => {

    const words: string[] = ["student", "developer", "researcher"];

    const [curWord, setCurWord] = useState(words[0]);
    const [wordPos, setWordPos] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [delay, setDelay] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (wordPos === curWord.length) {
                    setDelay(5450);
                    setIsDeleting(true);
                    setIsPaused(true);
                }
                else if (isPaused) {
                    setDelay(150);
                    setIsPaused(false);
                }
            }
            else {
                if (wordPos === 0) {
                    setDelay(2450);
                    setIsDeleting(false);
                    setIsPaused(true);
                    setCurWord(words[Math.floor(Math.random() * words.length)]);
                }
                else if (isPaused) {
                    setDelay(100);
                    setIsPaused(false);
                }
            }
            setWordPos(wordPos + (isDeleting ? -1 : 1));
        }
        const timeout = setTimeout(handleTyping, delay);
        return () => clearTimeout(timeout);
    }, [curWord, wordPos, isDeleting, isPaused, delay]);

    return (
        <div>
            <span>{curWord.substring(0, wordPos)}</span>
            <span className={isPaused ? "animate-cursorBlink" : ""}>|</span>
        </div>
    )
}

export default TypingIntro