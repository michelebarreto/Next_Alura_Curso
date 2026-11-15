export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>
        {`*{
          font-family:sans-serif;
          font-size:34px;
    }`
        }
      </style>
      <Component {...pageProps} />
    </>
  )
}
