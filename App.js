import React from "react"
import ReactDOM from 'react-dom/client'
const number=1000
const elem=<span>You Got it</span>
const Title=()=>{
    return (<h1> {number}
        React Using JSX {elem}
        </h1>)
}
const HeadingFunctionalComponent=()=>(
    <div>
        <Title/>
     <h1>Heading Functional Component </h1>
    </div>
)
const jsxHeading=<h1 className="heading">H1 using Jsx</h1>;// ReactElement using JSX
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingFunctionalComponent/>)