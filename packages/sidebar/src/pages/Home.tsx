import { useVscodeStore } from '@/stores/vscodeStore'

function Home() {
  const { vscodeData } = useVscodeStore()
  return (
    <>
      <h1>{vscodeData.language}</h1>
    </>
  )
}

export default Home