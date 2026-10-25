/**
 * Brand intro shown on the first page load of a visit: the logo rises in,
 * a light sweeps across it, the wordmark appears over a filling line, then
 * the screen lifts away. It runs on CSS alone, so it always clears itself
 * (about 1.7 s) even without JavaScript, never blocks the page underneath,
 * and is skipped on later page loads in the same browser session.
 */
const skipScript = `try{var k="nk-intro";if(sessionStorage.getItem(k)){document.getElementById("preloader").style.display="none"}else{sessionStorage.setItem(k,"1")}}catch(e){}`;

export function Preloader() {
  return (
    <>
      <div id="preloader" aria-hidden="true" className="preloader" suppressHydrationWarning>
        <div className="preloader-inner">
          <span className="preloader-mark">
            {/* eslint-disable-next-line @next/next/no-img-element -- must paint before the image optimiser and hydration */}
            <img src="/brand/logo-mark-teal.png" alt="" width={324} height={400} fetchPriority="high" />
            <span className="preloader-shine" />
          </span>
          <span className="preloader-word" dir="ltr">
            Namow<span className="text-teal-light">KSA</span>
          </span>
          <span className="preloader-line">
            <span />
          </span>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: skipScript }} />
    </>
  );
}
