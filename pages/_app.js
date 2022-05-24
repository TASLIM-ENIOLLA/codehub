import
Script from 'next/script'
import
Head from 'next/head'

export default ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Business | Bootstrap 5 Business Template</title>
            </Head>
            <Component className = "po-rel" style = {{zIndex: 0}} {...pageProps} />
            <Script src="assets/js/bootstrap.bundle.min.js"></Script>
            <Script src="assets/js/glightbox.min.js"></Script>
            <Script src="assets/js/main.js"></Script>
            <Script src="assets/js/tiny-slider.js"></Script>
            <Script src="assets/js/init.js"></Script>
        </>
    )
}
