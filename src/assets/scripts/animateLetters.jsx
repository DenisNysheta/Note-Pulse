export default function(expression, classNameForLetter) {
    let listLetters = []
    for(let i = 0; i < expression.length; i++) {
        let delay = `.${i}999s`
        let x = <span style={{animationName: "greetings", animationDelay: delay, animationDuration: "2s", animationIterationCount: 1, animationTimingFunction: "linear", animationFillMode: "forwards"}} className={classNameForLetter}>{expression[i]}</span>
        listLetters.push(x)
    }
    return listLetters
}