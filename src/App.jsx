import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/theme'
import Question from './components/Question'

function App() {
  const [themeMode,setThemeMode] = useState('light');
  const lightTheme=()=>{
    setThemeMode('light')
  }
  const darkTheme=()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  const handleChange=()=>{
    
  }
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn/>
          </div>
          <div className='max-w-md mx-auto bg-gray-300 p-4 text-black rounded-lg dark:bg-gray-900 dark:text-white'>
            <Question question_id={1} question={"Identify the device through which data and instructions are entered into a computer?"} option1={"Software"} option2={"Output device"} option3={"Input device"} option4={"None of these"} queNo={1} handleChange={handleChange}/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
