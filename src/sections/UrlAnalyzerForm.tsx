import { useRef, useState } from 'react'
import { Button } from '../components/Button'
import { Plus } from '../components/Icons'

interface Props {
  url: string
  setUrl: (url: string) => void
  file: File | null
  setFile: (file: File | null) => void
}

export default function UrlAnalyzerForm({ url, setUrl, file, setFile }: Props) {
  const [dragging, setDragging] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)
  const analyze = () => {
    const params = new URLSearchParams({ source: 'reels-analyzer' })
    if (/^https?:\/\//i.test(url.trim())) params.set('url', url.trim())
    else if (file) params.set('intent', 'upload')
    window.open(`https://app.2mv.ai/?${params}`, '_blank', 'noopener,noreferrer')
  }
  const selectFile = (next: File | null) => {
    if (next) { setFile(next); setUrl('') }
  }
  const hint = file && !url.trim()
    ? 'file selected — continue the upload in the 2mv app'
    : url.trim() && !url.toLowerCase().includes('instagram.com')
      ? 'works best with a link from instagram.com'
      : 'paste a public reel link, or add a video file'

  return (
    <div className="az-chat">
      <div
        className={`az-chat-box${dragging ? ' is-drag' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); selectFile(e.dataTransfer.files[0] ?? null) }}
      >
        {file && <div className="az-chat-file"><span className="az-chat-file-chip">
          <span className="name keep-case">{file.name}</span>
          <button type="button" aria-label="remove video" onClick={() => setFile(null)}>×</button>
        </span></div>}
        <div className="az-chat-row">
          <input ref={fileInput} type="file" accept="video/*" hidden aria-label="upload video" onChange={(e) => { selectFile(e.target.files?.[0] ?? null); e.target.value = '' }} />
          <button type="button" className="az-chat-icon-btn az-chat-up" aria-label="add a video file" onClick={() => fileInput.current?.click()}><Plus /></button>
          <input className="az-chat-input" placeholder="paste an instagram reel url — or just hit try" aria-label="instagram reel url" value={url}
            onChange={(e) => { setUrl(e.target.value); setFile(null) }}
            onKeyDown={(e) => { if (e.key === 'Enter') analyze() }}
          />
          <Button variant="green" size="sm" onClick={analyze} aria-label="analyze this reel">try for free</Button>
        </div>
      </div>
      <p className="az-chat-hint" aria-live="polite">{hint}</p>
    </div>
  )
}
