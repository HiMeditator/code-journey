import { useState, useEffect } from 'react'
import { useVscodeStore } from '@/stores/vscodeStore'

function Timer() {
  const { vscodeData } = useVscodeStore()
  const [workTime, setWorkTime] = useState(vscodeData.todayWorkTime)

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkTime(prevWorkTime => prevWorkTime + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      今日已工作: {workTime} 秒
    </div>
  )
}

export default Timer