export default function(expression, classNameForLetter, animatenName, iteration, duration, delayAnima = 1) {
    let listLetters = []
    for(let i = 0; i < expression.length; i++) {
        let delay = `${delayAnima}.${i}s`
        let x = <span key={Date.now() + i + 4} style={{animationName: animatenName, animationDelay: delay, animationDuration: duration, animationIterationCount: iteration, animationTimingFunction: "linear", animationFillMode: "forwards"}} className={classNameForLetter}>{expression[i]}</span>
        listLetters.push(x)
    }
    return listLetters
}