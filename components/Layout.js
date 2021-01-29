import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="antialiased">{children}</main>
    </div>
  )
}
