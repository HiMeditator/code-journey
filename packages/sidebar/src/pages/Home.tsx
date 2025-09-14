import { useNavigate } from 'react-router-dom'
import { useCountStore } from '@/store'

function Home() {
  const navigate = useNavigate()
  const { count, inc, setZero } = useCountStore()
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Home</h1>
      <vscode-button onClick={() => navigate('/about')}>Go to About</vscode-button>
      <h2 className='text-2xl font-bold'>Zustand Example</h2>
      <p>Count: {count}</p>
      <vscode-button onClick={inc}>Increment</vscode-button>
      <vscode-button onClick={setZero}>Set Zero</vscode-button>
    </>
  )
}

export default Home