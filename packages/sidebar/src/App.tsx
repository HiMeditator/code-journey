import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useEffect } from 'react'
import { useVscodeStore } from './stores/vscodeStore'
import { postMessage } from '@/utils/vscodeAPI'

function App() {
  const { setProperty } = useVscodeStore()
  
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      console.log('Front-end receive:', message)
      switch(message.command) {
        case 'vsc.language.set':
          setProperty('language', message.language)
          break
      }
    };
    window.addEventListener('message', handleMessage)
    postMessage({command: 'ui.init.ready'})
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
