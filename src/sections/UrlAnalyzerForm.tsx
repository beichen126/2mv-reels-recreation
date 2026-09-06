import { useState } from 'react'
import { Button } from '../components/Button'
import { Plus } from '../components/Icons'

const SAMPLE_URL = 'https://www.instagram.com/reel/mock-example-123'

export default function UrlAnalyzerForm() {
  const [url, setUrl] = useState('')
  const [state, setState] = useState<'idle' | 'analyzing' | 'analyzed'>('idle')

  const analyze = () => {
    if (!url.trim()) setUrl(SAMPLE_URL)
    setState('analyzing')
    window.setTimeout(() => setState('analyzed'), 900)
  }

  return (
    <div className="az-chat">
      <div className="az-chat-box">
        <div className="az-chat-row">
          <span className="az-chat-icon-btn az-chat-up" aria-hidden="true">
            <Plus />
          </span>
          <input
            className="az-chat-input"
            placeholder="paste an instagram reel url — or just hit try"
            aria-label="instagram reel url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button variant="green" size="sm" onClick={analyze} disabled={state === 'analyzing'}>
            {state === 'analyzing' ? 'analyzing…' : 'try for free'}
          </Button>
        </div>
      </div>
      <p className="az-chat-hint" aria-live="polite">
        {state === 'analyzed' ? 'decoded a sample reel — see the beat map' : 'paste a public reel link, or add a video file'}
      </p>
    </div>
  )
}
