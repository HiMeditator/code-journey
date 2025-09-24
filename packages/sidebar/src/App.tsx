import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useVscodeStore } from './stores/vscodeStore'
import { postMessage } from '@/utils/vscodeAPI'

function App() {
  const { i18n } = useTranslation()
  const { setProperty } = useVscodeStore()
  
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      console.log('Front-end receive:', message)
      switch(message.command) {
        case 'vsc.language.set':
          setProperty('language', message.language)
          i18n.changeLanguage(message.language)
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
  }, [i18n, setProperty])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
