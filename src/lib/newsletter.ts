// Public subscription API used by the reference site's footer.
// Requests only run after the visitor submits the newsletter form.
export const newsletterEndpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT ||
  'https://fckczxrmufpv2st6j4emem6dwa0owfiu.lambda-url.us-east-1.on.aws/'

export async function subscribeNewsletter(email: string) {
  const response = await fetch(newsletterEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resource: 'Newsletter', action: 'Subscribe', payload: JSON.stringify({ email, source: 'footer' }) }),
    signal: AbortSignal.timeout(15000),
  })
  const result = await response.json()
  if (!response.ok || !result.success) throw new Error(result.failedReason || 'Something went wrong. Try again.')
}
