import { usersData } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function UsersSection() {
  return (
    <section className="section az-section users-section">
      <div className="inner">
        <SectionHeader tagline={usersData.tagline} title={usersData.title} />
        <dl className="az-grid cols-2">
          {usersData.items.map((u) => (
            <div className="az-card" key={u.name}>
              <dt className="az-card-title">{u.name}</dt>
              <dd className="az-card-body">{u.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
