// Content for the long page. Copy drawn from the Stage 1 runtime DOM (public page),
// including the public Instagram embeds used on the reference page.

export interface TrendingReel {
  label: string
  stat: string
  read: string
  embedId: string
}

export const trendingReels: TrendingReel[] = [
  {
    label: 'most-viewed reel of the week',
    stat: '70m+ views',
    read: 'single-frame hook, no intro card',
    embedId: 'DYCtgNFTemj',
  },
  {
    label: 'growth breakdown reel',
    stat: '80m views / 6 months',
    read: 'claim-first hook, sendable proof',
    embedId: 'DaQyBxSBJEY',
  },
  {
    label: 'comment-trigger reel',
    stat: '30m+ views / 90 days',
    read: 'comment-word cta drives replies',
    embedId: 'DZLOwn4BEjD',
  },
  {
    label: 'travel aesthetic reel',
    stat: '121.1k views',
    read: 'beauty frame loops back to frame 1',
    embedId: 'DbzZF7gD1qE',
  },
]

export interface NumCard {
  num: string
  title: string
  body: string
}

export const whyReels: { tagline: string; title: string; intro: string; items: NumCard[] } = {
  tagline: 'why reels are different',
  title: 'a reel is not a short vertical tiktok.',
  intro:
    'the same footage performs differently on reels because the ranking system rewards different behaviour. the analyzer reads a reel against reels mechanics, not generic short-form rules.',
  items: [
    {
      num: '01',
      title: 'sends are the loudest signal.',
      body: 'reels distribution in 2026 leans hard on shares to dms and stories. a reel that gets forwarded travels further than a reel that only gets liked — so the analyzer looks for the sendable moment, not just the hook.',
    },
    {
      num: '02',
      title: 'replays beat run time.',
      body: 'watch time counts replays, and a tight loop can push a 9-second reel past a 45-second one. the breakdown maps where the edit closes back on itself and whether the last frame invites a second pass.',
    },
    {
      num: '03',
      title: 'reels is its own ranking system.',
      body: 'feed, stories, explore and reels rank separately. follower count matters less here than early engagement velocity and original audio, which is why small accounts still break out.',
    },
  ],
}

export interface SignalRow {
  title: string
  weight: string
  body: string
}

export const rankingSignals: { tagline: string; title: string; rows: SignalRow[] } = {
  tagline: 'ranking signals',
  title: 'what the reels system weighs — and how 2mv reads it inside the frames.',
  rows: [
    {
      title: 'sends & shares',
      weight: 'top-tier',
      body: 'the analyzer names the shareable payload — the fact, the punchline, the location, the visual receipt someone forwards to a friend.',
    },
    {
      title: 'watch time + replays',
      weight: 'top-tier',
      body: 'beat map of where attention is likely to drop, and whether the loop closes cleanly enough to earn a replay.',
    },
    {
      title: 'early engagement velocity',
      weight: 'high',
      body: 'how fast the opening earns a reaction: comment bait, on-screen question, incomplete statement in the first 1.5 seconds.',
    },
    {
      title: 'saves',
      weight: 'high',
      body: 'does the reel carry reference value — a list, a route, a price, a step sequence worth keeping.',
    },
    {
      title: 'original audio',
      weight: 'medium',
      body: 'whether the audio is original or borrowed, and how voice, sfx and music sit against the cut rhythm.',
    },
    {
      title: 'comments & replies',
      weight: 'medium',
      body: 'the disagreement or gap the reel leaves open on purpose, mapped to the frame where it lands.',
    },
    {
      title: 'caption & on-screen text',
      weight: 'supporting',
      body: 'text hierarchy, timing, reveal order — and how the caption extends rather than repeats the visual.',
    },
  ],
}

export interface BeatRow {
  time: string
  idx: string
  title: string
  body: string
}

export const anatomy: { tagline: string; title: string; beats: BeatRow[] } = {
  tagline: 'anatomy of a viral reel',
  title: 'five beats decide whether a reel travels.',
  beats: [
    {
      time: '0.0 – 1.0s',
      idx: '01',
      title: 'scroll stop',
      body: 'one visual with no setup, usually mid-motion. no logo, no intro, no slow pan. the analyzer identifies the device used and whether the first frame reads at thumbnail size.',
    },
    {
      time: '1.0 – 3.0s',
      idx: '02',
      title: 'promise',
      body: 'the reel states what the viewer gets if they stay. spoken, on-screen, or implied by a visible countdown of items. missing this beat is the most common reason a reel stalls.',
    },
    {
      time: '3.0 – 8.0s',
      idx: '03',
      title: 'escalation',
      body: 'cut rhythm tightens, each shot adds new information. the breakdown flags any shot that repeats what the previous one already said.',
    },
    {
      time: '8s – end',
      idx: '04',
      title: 'payoff',
      body: 'the reveal, the number, the transformation. this is the frame most likely to trigger a send, and it gets timed against the run length.',
    },
    {
      time: 'last 0.5s',
      idx: '05',
      title: 'loop close',
      body: 'the final frame either matches the opening frame — making the replay invisible — or it hard-stops. the analyzer scores which one the edit chose.',
    },
  ],
}

export const eightAxes: { tagline: string; title: string; intro: string; items: NumCard[] } = {
  tagline: 'what it analyzes',
  title: 'every viral video breakdown runs on eight axes.',
  intro:
    'each axis returns an analysis, a recommendation and production guidance — so the output reads like a brief, not a report.',
  items: [
    { num: '01', title: 'topic', body: 'which subjects are actually pulling views in your niche right now.' },
    { num: '02', title: 'hook', body: 'the first-seconds device, phrasing and framing that stops the scroll.' },
    { num: '03', title: 'pattern', body: 'the repeatable structure a format follows from open to payoff.' },
    { num: '04', title: 'content flow', body: 'beat-level pacing: where tension builds, holds and releases.' },
    { num: '05', title: 'visuals', body: 'shot composition, motion, on-screen text and visual density.' },
    { num: '06', title: 'audio & music', body: 'track choice, sound design and how audio drives retention.' },
    { num: '07', title: 'viewer psychology', body: 'the mechanism doing the work, curiosity gap, status, relief, proof.' },
    { num: '08', title: 'audience profile', body: 'who the video is actually landing with, and why it resonates.' },
  ],
}

export interface MythItem {
  myth: string
  real: string
}

export const mythsData: { tagline: string; title: string; items: MythItem[] } = {
  tagline: 'myths vs data',
  title: 'most reels advice is describing an algorithm that no longer exists.',
  items: [
    {
      myth: 'there is one best time to post reels.',
      real: 'reels are distributed by recommendation, not chronology. a strong reel keeps accumulating reach for days; timing shifts the first hour, not the ceiling.',
    },
    {
      myth: 'hashtags decide reach.',
      real: 'hashtags are weak topic hints. the content signal — what is actually in the frames and audio — carries far more weight.',
    },
    {
      myth: 'you need followers to break out.',
      real: 'the reels system tests content against non-followers first. early watch time and sends decide expansion, which is why accounts under 1k still hit millions.',
    },
    {
      myth: 'longer reels get suppressed.',
      real: 'length is not penalised — unfinished watch time is. a 60-second reel that holds beats a 12-second reel people swipe past.',
    },
    {
      myth: 'deleting a low-view reel helps the account.',
      real: 'there is no account-level punishment to undo. each reel is tested largely on its own merits.',
    },
  ],
}

export interface MetricRow {
  metric: string
  what: string
  use: string
}

export const metricsData: { tagline: string; title: string; intro: string; rows: MetricRow[] } = {
  tagline: 'instagram reels analytics',
  title: 'which reels metrics actually mean something.',
  intro:
    'instagram insights covers your own account. read these six the right way, then use the analyzer to explain what caused them.',
  rows: [
    {
      metric: 'views / plays',
      what: 'how many times the reel started playing, replays included.',
      use: 'a volume number only. never read it without watch time next to it.',
    },
    {
      metric: 'reach vs views',
      what: 'unique accounts vs total plays.',
      use: 'views far above reach means people replayed — your loop is working.',
    },
    {
      metric: 'average watch time',
      what: 'seconds held per play against run length.',
      use: 'the retention truth. under 40% of run length points at a broken promise beat.',
    },
    {
      metric: 'sends per reach',
      what: 'shares to dms and stories, normalised.',
      use: 'the single best predictor of expansion. optimise the payoff frame for it.',
    },
    {
      metric: 'saves per reach',
      what: 'how often the reel got kept.',
      use: 'signals reference value. high saves with low sends means useful but not social.',
    },
    {
      metric: 'follows from reel',
      what: 'new follows attributed to the reel.',
      use: 'tells you whether the reel sold the account or just the clip.',
    },
  ],
}

export const usersData: { tagline: string; title: string; items: { name: string; body: string }[] } = {
  tagline: 'who uses it',
  title: 'for everyone deciding which reel to film next.',
  items: [
    {
      name: 'brand social teams',
      body: "turn a scroll session through your category's top reels into a brief your editors can shoot without a rewrite.",
    },
    {
      name: 'creators',
      body: 'find the reels winning in your niche, then rebuild the structure — hook device, beat map, loop close — with your own footage.',
    },
    {
      name: 'agencies',
      body: "run the same reels teardown process across every client account instead of relying on one strategist's instinct.",
    },
    {
      name: 'competitor research',
      body: 'see which reel formats a rival account is compounding on, and how their sendable moment is engineered.',
    },
  ],
}

export interface RelatedCard {
  title: string
  body: string
  href: string
}

export const relatedData: { tagline: string; items: RelatedCard[] } = {
  tagline: 'keep going',
  items: [
    {
      title: 'ai video analyzer',
      body: 'the hub page: how the analyzer works across tiktok, reels and shorts.',
      href: '/ai-video-analyzer',
    },
    {
      title: '2mv studio',
      body: 'the full platform — continuous niche monitoring, patterns and playbooks.',
      href: '/studio',
    },
    {
      title: '2mv tools',
      body: 'every free utility built on the research loop, in one place.',
      href: '/tools',
    },
    {
      title: 'blog',
      body: 'guides, trends and original research on short-form and organic growth.',
      href: '/blog',
    },
  ],
}

export interface FaqItem {
  q: string
  a: string
}

export const faqData: { title: string[]; items: FaqItem[] } = {
  title: ['instagram reels', 'questions,', 'answered.'],
  items: [
    {
      q: 'how do i see analytics on instagram reels?',
      a: "instagram gives you views, reach, watch time, likes, comments, saves and sends inside professional dashboard for your own account only. 2mv works on the other side of that wall: it analyzes any public reel — including competitors' — frame by frame and explains what produced those numbers.",
    },
    {
      q: 'why is my reel not getting views?',
      a: 'in almost every teardown it comes down to one of three things: no promise beat in the first three seconds, a repeated shot that stalls new information, or a payoff that arrives after the audience already left. the breakdown names which one applies to your reel.',
    },
    {
      q: 'is there a free instagram reels analyzer?',
      a: 'platform insights are free but limited to your own posts. 2mv is a paid analyzer because it decodes any public reel at frame level and keeps monitoring your niche continuously — see pricing for the current plans.',
    },
    {
      q: 'how do you analyze a viral reel?',
      a: 'paste the reel url. the video is decoded shot by shot, then read across eight axes — topic, hook, pattern, content flow, visuals, audio, viewer psychology and audience — and returned as a beat map with hook directions you can film.',
    },
    {
      q: 'does this work for reels from accounts i do not own?',
      a: 'yes. any public reel can be analyzed, which is the point — competitor and niche research is where most of the value sits.',
    },
    {
      q: 'how many hashtags should a reel use?',
      a: 'hashtags are a minor topic hint in 2026. three to five relevant ones is plenty; the content signal inside the frames and audio decides distribution.',
    },
    {
      q: 'does the analyzer generate reels for me?',
      a: 'no. it outputs direction — angles, hooks, structure, pacing, visual and audio guidance. filming and editing stay with you or your editor.',
    },
  ],
}

export const ctaData: { lead: string; hl: string; sub: string; startHref: string; demoHref: string } = {
  lead: 'Turn organic growth into',
  hl: 'a repeatable engine.',
  sub: 'Organic growth you can see, measure, and repeat.',
  startHref: '/studio',
  demoHref: '/book-a-demo',
}

export interface FooterLink {
  text: string
  href: string
}

export const footerData: {
  brand: string
  slogan: string
  newsLabel: string
  columns: { label: string; links: FooterLink[] }[]
  copyright: string
} = {
  brand: '2mv',
  slogan: 'from zero to millions of views.',
  newsLabel: 'Newsletters for viral trends, go-to-market insights, and growth strategies.',
  columns: [
    {
      label: 'explore',
      links: [
        { text: 'service', href: '/' },
        { text: 'studio', href: '/studio' },
        { text: 'ai video analyzer', href: '/ai-video-analyzer' },
        { text: 'instagram reels analyzer', href: '/ai-video-analyzer/instagram-reels' },
        { text: 'tiktok video analyzer', href: '/ai-video-analyzer/tiktok' },
        { text: 'youtube shorts analyzer', href: '/ai-video-analyzer/youtube-shorts' },
        { text: 'tools', href: '/tools' },
        { text: 'blog', href: '/blog' },
      ],
    },
    {
      label: 'connect',
      links: [{ text: 'book a demo', href: '/book-a-demo' }],
    },
    {
      label: 'legal',
      links: [
        { text: 'privacy policy', href: '/privacy-policy' },
        { text: 'terms of use', href: '/terms-of-service' },
      ],
    },
  ],
  copyright: '© 2026 2mv. All rights reserved.',
}
