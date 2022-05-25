import 
Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render(){
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/assets/images/favicon.svg" type="image/svg" />
                    <link rel = 'stylesheet' href="/assets/css/bootstrap.min.css" />
                    <link rel = 'stylesheet' href="/assets/css/lineicons.css" />
                    <link rel = 'stylesheet' href="/assets/css/tiny-slider.css" />
                    <link rel = 'stylesheet' href="/assets/css/glightbox.min.css" />
                    <link rel = 'stylesheet' href="/assets/css/style.css" />
                    <link rel = 'stylesheet' href="/assets/font-awesome/font-awesome/font-awesome.css" />
                    <link rel = 'stylesheet' href="/assets/font-awesome/animate.css" />
                    <link rel = 'stylesheet' href="/assets/css/common.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument