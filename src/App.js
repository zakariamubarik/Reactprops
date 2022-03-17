import React from 'react'
import NavBar from "./components/NavBar"
import Todo from "./components/Todo"

function App() {
  let title="my first react app";
  

  return (
    <div>
     <NavBar title={title}/>
     <main>
     <Todo title="Learning react" datetime= "23th March 2022" />
     <Todo title="Prmest training" datetime= "2nd January 2022"/>
     <Todo title="Going to market" datetime= "3rd   April 2022"/>
     <Todo title="Writing exams" datetime= "18th December 2022"/>
     <Todo title="Depreciating cedis" datetime= "4th October 2022"/>
     </main>
    </div>
  )
}

export default App