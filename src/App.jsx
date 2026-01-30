import { useMemo, useState } from 'react'
import './index.css'

function App() {
  const [accepted, setAccepted] = useState(false)

  // Stream start moment (UTC)
  const streamStartUtc = useMemo(
    () => new Date('2026-01-30T02:00:00Z'),
    []
  )

  const ukDateText = streamStartUtc.toLocaleDateString('en-GB', {
    timeZone: 'Europe/London',
  })

  const ukTimeText = streamStartUtc.toLocaleTimeString('en-GB', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <>
      {/* DISCLAIMER OVERLAY */}
      {!accepted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="bg-[#111] text-white max-w-[500px] w-[90%] p-6 text-center rounded-lg">
            <div className="medium text-xl mb-4">DISCLAIMER</div>

            <p className="regular text-sm leading-relaxed opacity-90">
              THE STREAM ON HERE <b>DOES</b> REDIRECT YOU TO AN ADVERT.
              <br /><br />
              I RECOMMEND YOU INSTALL{' '}
              <a
                href="https://ublockorigin.com/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                UBLOCK ORIGIN
              </a>{' '}
              TO PREVENT THIS.
              <br /><br />
              THE ADVERTS MAY BE NSFW.
              <br />
              I CAN NOT CONTROL IT AS IT ISNT MY STREAM.
            </p>

            <button
              onClick={() => setAccepted(true)}
              className="mt-6 px-6 py-2 bg-white text-black medium rounded cursor-pointer hover:bg-gray-200 transition"
            >
              ACCEPT
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className={accepted ? '' : 'pointer-events-none select-none blur-sm'}>
        <div className="medium text-2xl text-center mt-10 p-6">
          YE // MEXICO
        </div>

        <div className="regular text-center">
          <div>{ukTimeText}</div>
          <div>{ukDateText}</div>
        </div>

        <div className="flex mx-auto mt-30 max-w-[600px] stream w-[60vw] h-auto aspect-video bg-[#d4d4d4]">
          <iframe
            className="w-full h-full"
            src="https://modistreams.org/embed/ye---mexico-city-day-1"
            title="YE // MEXICO stream"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    </>
  )
}

export default App
