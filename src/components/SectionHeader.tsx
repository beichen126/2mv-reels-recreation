interface SectionHeaderProps {
  tagline?: string
  dark?: boolean
  title: string
  intro?: string
  titleMax?: string
  introMax?: string
}

export default function SectionHeader({ tagline, dark, title, intro, titleMax, introMax }: SectionHeaderProps) {
  return (
    <div className="reveal">
      {tagline && <span className={`tagline ${dark ? 'on-dark' : ''}`}>{tagline}</span>}
      <h2 className="az-h2" style={titleMax ? { maxWidth: titleMax } : undefined}>
        {title}
      </h2>
      {intro && <p className="az-intro" style={introMax ? { maxWidth: introMax } : undefined}>{intro}</p>}
    </div>
  )
}
