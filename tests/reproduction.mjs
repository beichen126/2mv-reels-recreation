import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true })
const base = process.env.TEST_URL || 'http://127.0.0.1:5173'
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  // No test data reaches Instagram, the analyzer, or the subscription service.
  await page.route('https://www.instagram.com/**', route => route.fulfill({ contentType: 'text/html', body: '<p>Embed fixture</p>' }))
  await page.addInitScript(() => { window.openCalls = []; window.open = (...args) => { window.openCalls.push(args); return null } })
  let requests = 0
  let succeed = false
  await page.route('https://*.lambda-url.us-east-1.on.aws/**', async route => {
    requests++
    const body = route.request().postDataJSON()
    assert.equal(body.resource, 'Newsletter')
    assert.deepEqual(JSON.parse(body.payload), { email: 'reproduction-test@example.com', source: 'footer' })
    await route.fulfill({ contentType: 'application/json', body: JSON.stringify(succeed ? { success: true } : { success: false, failedReason: 'Please try again.' }) })
  })
  await page.goto(base)
  await page.evaluate(() => document.fonts.ready)
  const input = page.getByRole('textbox', { name: 'instagram reel url' })
  const cards = page.locator('.az-trend-card')
  await cards.first().click()
  assert.equal(await input.inputValue(), 'https://www.instagram.com/reel/DYCtgNFTemj/')
  await cards.nth(1).press('Enter')
  assert.equal(await input.inputValue(), 'https://www.instagram.com/reel/DaQyBxSBJEY/')
  await cards.nth(2).press('Space')
  assert.equal(await input.inputValue(), 'https://www.instagram.com/reel/DZLOwn4BEjD/')
  await input.press('Enter')
  let opened = await page.evaluate(() => window.openCalls.at(-1))
  assert.equal(new URL(opened[0]).searchParams.get('url'), await input.inputValue())
  assert.equal(new URL(opened[0]).origin, 'https://app.2mv.ai')
  await input.fill('')
  await page.getByRole('button', { name: 'analyze this reel' }).click()
  opened = await page.evaluate(() => window.openCalls.at(-1))
  assert.equal(opened[0], 'https://app.2mv.ai/?source=reels-analyzer')
  await page.getByLabel('upload video', { exact: true }).setInputFiles({ name: 'My-Reel.mp4', mimeType: 'video/mp4', buffer: Buffer.from('fixture') })
  assert.equal(await page.locator('.az-chat-file .name').textContent(), 'My-Reel.mp4')
  await page.getByRole('button', { name: 'analyze this reel' }).click()
  assert.equal(new URL((await page.evaluate(() => window.openCalls.at(-1)))[0]).searchParams.get('intent'), 'upload')
  await cards.first().click()
  assert.equal(await page.locator('.az-chat-file').count(), 0)
  await input.fill('https://example.com/video')
  assert.match(await page.locator('.az-chat-hint').textContent(), /works best/)
  assert.equal(await page.locator('.az-embed iframe').count(), 4)
  const faq = page.locator('.az-faq-q')
  await faq.nth(1).click()
  assert.equal(await faq.first().getAttribute('aria-expanded'), 'false')
  assert.equal(await faq.nth(1).getAttribute('aria-expanded'), 'true')
  await faq.nth(1).click()
  assert.equal(await faq.nth(1).getAttribute('aria-expanded'), 'false')
  const email = page.locator('.foot-input')
  await email.fill('invalid')
  await page.getByRole('button', { name: 'join newsletter' }).click()
  assert.equal(requests, 0)
  await email.fill('reproduction-test@example.com')
  await page.getByRole('button', { name: 'join newsletter' }).click()
  await page.getByRole('alert').waitFor()
  assert.equal(await page.getByRole('alert').textContent(), 'Please try again.')
  succeed = true
  await page.getByRole('button', { name: 'join newsletter' }).click()
  await page.locator('.foot-form-done').waitFor()
  assert.equal(requests, 2)
  assert.equal(await email.isDisabled(), true)
  for (const width of [1440, 1280, 1024, 980, 900, 861, 860, 768, 721, 720, 640, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 })
    const geometry = await page.evaluate(() => {
      const style = selector => getComputedStyle(document.querySelector(selector))
      return {
        overflow: document.documentElement.scrollWidth > innerWidth,
        doubleColumns: style('.users-section .az-grid').gridTemplateColumns.split(' ').length,
        tableVisible: style('.az-table-head').display !== 'none',
        navMobile: style('.site-navbar__mobile-trigger').display !== 'none',
      }
    })
    assert.equal(geometry.overflow, false, `horizontal overflow at ${width}px`)
    assert.equal(geometry.doubleColumns, width > 640 ? 2 : 1)
    assert.equal(geometry.tableVisible, width > 860)
    assert.equal(geometry.navMobile, width <= 720)
  }
  await page.evaluate(() => scrollTo(0, 0))
  const menu = page.getByRole('button', { name: 'Open navigation' })
  await menu.click()
  assert.equal(await page.getByRole('button', { name: 'Close navigation' }).getAttribute('aria-expanded'), 'true')
  assert.equal(await page.locator('.site-navbar__link').first().isVisible(), true)
  await page.getByRole('button', { name: 'Close navigation' }).click()
  assert.deepEqual(errors, [])
  console.log('Passed: reel selection, analyzer handoff, file state, FAQ, newsletter failure/retry, navigation and 12 responsive widths.')
} finally {
  await browser.close()
}
