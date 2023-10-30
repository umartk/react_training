import { useState } from 'react'
import Heavy, { MemoizedHeavy, MemoizedHeavyWithInternalState, HeavyWithInternalStateAndUseMemo } from './components/Heavy'
import './App.css'


const Main = (props) => {
  return <div>
    <h2>Main</h2>
    {!props.isLogin ? <h2>please login</h2> : props.children}
  </div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Main isLogin={true}>
          <h1>1st Component</h1>
          <h2>2nd Heading Component</h2>
        </Main>
        {/* <Heavy start={0} end={9999999999} /> */}
        {/* <MemoizedHeavy start={0} end={9999999999} /> */}
        {/* <MemoizedHeavyWithInternalState start={0} end={9999999999} /> */}
        <HeavyWithInternalStateAndUseMemo start={0} end={10} />
      </div>
    </>
  )
}

export default App

// redux toolkit
// 
//