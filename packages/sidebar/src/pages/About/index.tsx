import { useNavigate } from 'react-router-dom'

function Test() {
  const navigate = useNavigate()
  return (
    <>
      <h1>About</h1>
      <p className='mb-2'>by HiMeditator</p>
      <vscode-button onClick={() => navigate('/')}>Go to Home</vscode-button>
    </>
  )
}

export default Test