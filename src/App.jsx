import './index.css'

function App() {
  const ukDate = new Date('2026-01-30T02:00:00Z')

  return (
    <>
      <div className="medium text-2xl text-center mt-10 p-6">YE // MEXICO</div>

      <div className="regular text-center">
        <div>
          {ukDate.toLocaleDateString()}
        </div>
        <div>
          {ukDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>

      <div className='flex mx-auto mt-30 max-w-[600px] stream w-[60vw] h-auto aspect-video bg-[#d4d4d4]'>
        <iframe className='w-full object-' src="https://modistreams.org/embed/ye---mexico-city-day-1"></iframe>
      </div>
      <p className="light mx-auto w-[300px] opacity-30 text-center mt-6">An ad will popup the first time you click play, I can't change this as it isnt my stream (DO NOT SHOW AD ON STREAM IT MAY BE NSFW). - lucid</p>
    </>
  )
}

export default App
