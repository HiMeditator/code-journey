import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCountStore } from '@/stores/countStore'
import { postMessage } from '@/utils/vscodeAPI'
import { useVscodeStore } from '@/stores/vscodeStore'

function Home() {
  const navigate = useNavigate()
  const { count, inc, setZero } = useCountStore()
  const { vscodeData } = useVscodeStore()
  const [text, setText] = useState('Hello World')
  return (
    <>
      <h1 className='!text-3xl font-bold underline'>Home</h1>
      <vscode-button onClick={() => navigate('/about')}>Go to About</vscode-button>
      
      <h2 className='text-2xl font-bold mt-[20px]'>Zustand Example</h2>
      <p className='text-base/8'>Count: {count}</p>
      <vscode-button onClick={inc} className="mr-2">Increment</vscode-button>
      <vscode-button onClick={setZero}>Set Zero</vscode-button>

      <h2 className='text-2xl font-bold mt-[20px]'>VS Code API Test</h2>
      <vscode-textarea
        className='block w-full my-2'
        value={text}
        onInput={(e) => setText(e.currentTarget.value)}
      />
      <vscode-button
        className='mr-2'
        onClick={() => postMessage({ command: 'info.show', text: text })}
      >Send Info</vscode-button>
      <vscode-button
        onClick={() => postMessage({ command: 'time.get' })}
      >Get Time</vscode-button>
      <div
        className='mt-[20px] text-2xl'
      >Time: {vscodeData.time}</div>
    </>
  )
}

export default Home