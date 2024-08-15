export default function(expression, classNameForLetter) {
    let listLetters = []
    for(let i = 0; i < expression.length; i++) {
        let delay = `1.${i}s`
        let x = <span key={Date.now() + i + 4} style={{animationName: "greetings", animationDelay: delay, animationDuration: ".4s", animationIterationCount: 1, animationTimingFunction: "linear", animationFillMode: "forwards"}} className={classNameForLetter}>{expression[i]}</span>
        listLetters.push(x)
    }
    return listLetters
}