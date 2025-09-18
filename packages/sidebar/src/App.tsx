import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useEffect } from 'react'
import { useVscodeStore } from './stores/vscodeStore'

function App() {
  const { setProperty } = useVscodeStore()
  
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      console.log('Front-end receive:', message)
      switch(message.command) {
        case 'time.send':
          setProperty('time', message.time)
          break
      }
    };
    window.addEventListener('message', handleMessage)
    console.log('handleMessage mounted')
    return () => {
      window.removeEventListener('message', handleMessage)
      console.log('handleMessage unmounted')
    }
  }, [setProperty])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
