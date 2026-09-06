// Content for the long page. Copy drawn from the Stage 1 runtime DOM (public page),
// with third-party media replaced by designed static placeholders.

export interface TrendingReel {
  label: string
  stat: string
  read: string
  handle: string
  caption: string
  gradient: string
}

export const trendingReels: TrendingReel[] = [
  {
    label: 'most-viewed reel of the week',
    stat: '70m+ views',
    read: 'single-frame hook, no intro card',
    handle: '@2mv',
    caption: 'most-viewed reel on instagram',
    gradient: 'linear-gradient(160deg, #2b1a3d 0%, #14100f 55%, #0a0a09 100%)',
  },
  {
    label: 'growth breakdown reel',
    stat: '80m views / 6 months',
    read: 'claim-first hook, sendable proof',
    handle: '@2mv',
    caption: 'from 0 to 80m in six months',
    gradient: 'linear-gradient(160deg, #0d2438 0%, #0f1218 55%, #0a0a09 100%)',
  },
  {
    label: 'comment-trigger reel',
    stat: '30m+ views / 90 days',
    read: 'comment-word cta drives replies',
    handle: '@2mv',
    caption: 'say the word to unlock part two',
    gradient: 'linear-gradient(160deg, #241a12 0%, #12100e 55%, #0a0a09 100%)',
  },
  {
    label: 'travel aesthetic reel',
    stat: '121.1k views',
    read: 'beauty frame loops back to frame 1',
    handle: '@2mv',
    caption: 'the color grade that loops',
    gradient: 'linear-gradient(160deg, #1e2620 0%, #10140f 55%, #0a0a09 100%)',
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
