import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Maki'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div>
      <div id='js-repro-global-header-banner-area'></div>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5XWVVVL');`, }}>
          </script>
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XWVVVL" height="0" width="0" style="display:none;visibility:hidden"></iframe>`, }}></noscript>
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
              <>
                <Link href="/">
                  <a>
                    <img
                      src="/images/profile.jpg"
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <script dangerouslySetInnerHTML={{
          __html: `!function(o,e,n){var r=[];if(window.reproio)console.info("Repro Web SDK was loaded more than once");else{window.reproio=function(){r.push(arguments)};var i=o.createElement(e),t=o.getElementsByTagName(e)[0];i.src="https://cdn.reproio.com/web/v2/repro-sdk.min.js",i.async=!0,i.crossOrigin="",i.onload=function(){window.reproio("setSnippetVersion","2.1"),r.forEach(function(o){window.reproio.apply(window.reproio,o)})},t.parentNode.insertBefore(i,t)}}(document,"script");reproio("setup", "b05509a0-48c5-46c6-9031-12faa07dbdb5");reproio("track","PageView");`,
        }}></script>
      </div>
    </div>

  )
}
