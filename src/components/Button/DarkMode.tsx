import { useTheme } from 'next-themes'
import { event } from 'plugins/gtag'
import React from 'react'
import styles from 'styles/components/Button/darkmode.module.css'

const App: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    event({ action: 'change_theme', category: 'debug', label: `to ${theme}` })
  }
  const defaultChecked = theme === 'dark'
  return (
    <>
      <div className="relative inline-block align-middle mr-2 w-10 select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className={`${styles.toggleCheckbox} absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer`}
          onClick={onClick}
          defaultChecked={defaultChecked}
        />
        <label
          htmlFor="toggle"
          className={`${styles.toggleLabel} block h-6 bg-gray-300 rounded-full cursor-pointer overflow-hidden`}
        ></label>
      </div>
      <label htmlFor="toggle" className="text-gray-700 text-xs"></label>
    </>
  )
}

export default App
