---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
style: home
---

<div class="container center">
  <h2 class="section-heading">Native Text, Image and Video Rendering</h2>
  <div class="grid triple-column">
    <p>Elytra renders all text natively using Apple’s TextKit techonologies enabling first-class support for various accessibility features.</p>
    <p>Control how text is rendered, including fonts, line-heights, and sizes. Everything can be adapted to make a perfect reading environment.</p>
    <p>Images and video are rendered as native components. Elytra carefully strips away all tracking pixels to craft a private reading experience.</p>
    <p>Platform specific intelligence highlights specific parts of on-screen text like dates, addresses to show additional contextual information.<sup><a href="#fn-ref-intelligence">1</a></sup></p>
    <p>Use full-text search to look up articles down to a single word, or generalise your search to titles of articles.</p>
    <p>Elytra offers image loading options for connectivity types and bandwidth. This is especially useful when reading articles on low-data mode connections.</p>
  </div>
</div>

<div class="container readable center" id="privacy">
  <div class="card">
    <hgroup>
      <h2 class="section-heading">Privacy First</h2>
      <h3 class="subhead">Elytra respects your privacy. The app collects zero information about you, or how you use the app.</h3>
    </hgroup>
    <ul id="privacy-notes">
      <li><p>But on the modern web, that’s clearly insufficient. So Elytra goes a step further, and strips all tracking images and scripts from articles, before they are even downloaded to your device.</p></li>
      <li><p>All images loaded in Elytra are routed through an image proxy, so your images are downloaded without ever revealing your devices.<sup><a href="#fn-ref-imageproxy">2</a></sup></p></li>
      <li><p>Videos are only ever loaded directly from source, including Youtube channels, completely restricting tracking of any kind.</p></li>
    </ul>
  </div>
</div>

<div id="screens" style="margin-bottom: 4.62rem;">
  <hgroup class="container readable center">
    <h2 class="section-heading">Designed to look great at all sizes</h2>
    <h3 class="subhead">Elytra for iOS & macOS is built using platform specific guidelines and frameworks, to give you the best experience where ever you use it.</h3>
  </hgroup>

  <div class="cards-container tall">
    <div class="cards-crop">
      <div class="cards-scroller">
        <ul>
          <li>
            <div>
              <div class="card-item-content shadowed interactive">
                <picture>
                  <source media="(prefers-color-scheme: dark)" srcset="/assets/images/home/screens-mac-dark.png 1x, /assets/images/home/screens-mac-dark@2x.png 2x, /assets/images/home/screens-mac-dark@3x.png 3x">
                  <img src="/assets/images/home/screens-mac.png" srcset="/assets/images/home/screens-mac@2x.png 2x, /assets/images/home/screens-mac@3x.png 3x" width="1322" height="793" alt="Elytra for macOS" loading="lazy"/>
                </picture>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="card-item-content shadowed interactive">
                <picture style="display: block; text-align: center;">
                  <source media="(prefers-color-scheme: dark)" srcset="/assets/images/home/screens-ios-dark.png 1x, /assets/images/home/screens-ios-dark@2x.png 2x, /assets/images/home/screens-ios-dark@3x.png 3x">
                  <img src="/assets/images/home/screens-ios.png" srcset="/assets/images/home/screens-ios@2x.png 2x, /assets/images/home/screens-ios@3x.png 3x" width="394" height="575" alt="Elytra for iOS" loading="lazy"/>
                </picture>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="card-item-content shadowed interactive">
                <picture style="display: block; text-align: center; vertical-align: bottom; position: relative; bottom: 500px;">
                  <source media="(prefers-color-scheme: dark)" srcset="/assets/images/home/screens-ipad-dark.png 1x, /assets/images/home/screens-ipad-dark@2x.png 2x, /assets/images/home/screens-ipad-dark@3x.png 3x">
                  <img src="/assets/images/home/screens-ipad.png" srcset="/assets/images/home/screens-ipad@2x.png 2x, /assets/images/home/screens-ipad@3x.png 3x" width="787" height="824" alt="Elytra for iPadOS" loading="lazy"/>
                </picture>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="container clear-bot" id="subs">
  <div class="container readable center">
    <hgroup>
      <h2 class="section-heading">One Subscription, Syncs Everywhere</h2>
      <h3 class="subhead">Elytra uses its own cloud service to fetch and sync articles across all of your devices running iOS, iPadOS and macOS.</h3>
    </hgroup>
  </div>
</div>

<div id="subs-media">
  <picture>
    <source media="(max-width: 600px)" srcset="/assets/images/home/hero-lockup-large-400w.png 1x, /assets/images/home/hero-lockup-large-800w.png 2x, /assets/images/home/hero-lockup-large-1600w.png 3x">
    <source media="(min-width: 601px) and (max-width: 800px)" srcset="/assets/images/home/hero-800w.png 1x, /assets/images/home/hero-lockup-large-1600w.png 2x, /assets/images/home/hero-lockup-large@3x.png 3x">
    <img src="/assets/images/home/hero-lockup-large.png" srcset="/assets/images/home/hero-lockup-large@2x.png 2x, /assets/images/home/hero-lockup-large@3x.png 3x" width="1851" height="463" alt="Elytra's timeline and article reader displayed on iPad, iPhone and macOS." loading="lazy"/>
  </picture>

  <div class="container">
    <div class="grid">
      <div><p>Elytra is free to try, forever, with a limit of up to 10 feeds in your subscriptions list. No other features are locked.</p></div>
      <div><p>You can choose from a monthly or yearly subscription (with a 7-day free trial) or a lifetime unlock of the app to remove limits.</p></div>
    </div>
  </div>
</div>

<div class="container center" id="smartfolders">
  <div>
    <div class="grid">
      <div>
        <h3>Power of Smart Folders</h3>
        <p>Smart folders enable powerful automations for grouping articles matching specific criteria and immediately notifying you about them.</p>
        <p>You can create smart folders to match interests, topics, subjects, and set them to only look at specific folders or entirely ignore some.</p>
      </div>
      <div>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="/assets/images/home/smartFolders-dark.png 1x, /assets/images/home/smartFolders-dark@2x.png 2x, /assets/images/home/smartFolders-dark@3x.png 3x">
          <img src="/assets/images/home/smartFolders.png" srcset="/assets/images/home/smartFolders@2x.png 2x, /assets/images/home/smartFolders@3x.png 3x" width="503" height="237" alt="Smart Folder editor window from Elytra for macOS" loading="lazy"/>
        </picture>
      </div>
    </div>
  </div>
</div>

<aside id="footnotes" class="container center">
  <ol>
    <li id="fn-ref-intelligence"><p>Platform specific intelligence features are available on macOS. Some features like telephone numbers and address parsing are also available on iOS and iPadOS.</p></li>
    <li id="fn-ref-imageproxy"><p>Loading images via the image proxy can be toggled at any time.</p></li>
  </ol>
</aside>

<script>
const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
 //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
const obsOptions = {};

// Attach observer to every [data-inviewport] element:
const ELSinViewport = document.querySelectorAll('[data-inviewport]');
ELSinViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});
</script>