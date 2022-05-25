import
{useState} from 'react'
import
{server} from '../config'
import
{PHPLogo, NextJSLogo} from '../public/assets/svg'

export default ({Footer: {year}}) => {
    Footer.defaultProps = {year: year}
    return (
        <>
            <NavBar />
            <SideBarLeft />
            <Header />
            <AboutArea />
            <Courses />
            <PricingArea />
            <Clients />
            <Contact />
            <Footer />
            <ScrollToTop />
        </>
    )
}

const NavBar = () => {
    return (
        <section className="navbar-area navbar-nine">
            <div className="container">
                <div className="row" style = {{alignItems: 'center', minHeight: '60px'}}>
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/">
                                <img style = {{borderRadius: '5px'}} src="assets/images/cti-logo-white.png" height = '50' alt="Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                            aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarNine">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="page-scroll active" href="#hero-area">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#about-us">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#courses">Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#pricing">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-btn d-none d-lg-inline-block">
                                <a className="menu-bar" href="#side-menu-left"><i className="lni lni-menu"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SideBarLeft = () => {
    return (
        <>
            <div className="sidebar-left">
                <div className="sidebar-close">
                    <a className="close" href="#close"><i className="lni lni-close"></i></a>
                </div>
                <div className="sidebar-content">
                    <div className="sidebar-logo">
                        <a href="/"><img src="assets/images/cti-logo.png" alt="Logo" /></a>
                    </div>
                    <div className="sidebar-menu">
                        <h5 className="menu-title">Quick Links</h5>
                        <ul>
                            <li><a href="#hero-area">Home</a></li>
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* <div className="sidebar-social align-items-center justify-content-center">
                        <h5 className="social-title">Follow Us On</h5>
                        <ul>
                            <li>
                                <a><i className="lni lni-facebook-filled"></i></a>
                            </li>
                            <li>
                                <a><i className="lni lni-twitter-original"></i></a>
                            </li>
                            <li>
                                <a><i className="lni lni-linkedin-original"></i></a>
                            </li>
                            <li>
                                <a><i className="lni lni-youtube"></i></a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className="overlay-left"></div>
        </>
    )
}

const Header = () => {
    return (
        <section id="hero-area" className="header-area header-eight">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="header-content">
                            <h1>Become a full stack<br />web developer <span className = 'h6 theme-color'>in 2 months.</span></h1>
                            <p className = 'text-caps'>
                                with the right knowledge from well experienced tutors, you can become a professional web developer in no time
                            </p>
                            <div className="button">
                                <a href = '#pricing' className="btn primary-btn">Get Started</a>
                                {/* <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                    className="glightbox video-button">
                                    <span className="btn icon-btn rounded-full">
                                    <i className="lni lni-play"></i>
                                    </span>
                                    <span className="text">Watch Intro</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="header-image">
                            <img src="assets/images/girl-with-laptop.jpg" alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const AboutArea = () => {
    return (
        <section id = 'about-us' className="about-area about-five">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-image-five">
                            <svg className="shape" width="106" height="134" viewBox="0 0 106 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.66654" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="1.66654" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="16.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="16.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="16.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="16.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="16.333" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="30.9998" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="30.9998" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="30.9998" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="30.9998" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="31" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="74.6668" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="45.6665" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="89.3333" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="60.3333" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="1.66679" r="1.66667" fill="#DADADA" />
                                <circle cx="60.3333" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="16.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="60.3333" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="31.0001" r="1.66667" fill="#DADADA" />
                                <circle cx="60.3333" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="45.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="60.3335" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="88.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="117.667" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="74.6668" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="103" r="1.66667" fill="#DADADA" />
                                <circle cx="60.333" cy="132" r="1.66667" fill="#DADADA" />
                                <circle cx="104" cy="132" r="1.66667" fill="#DADADA" />
                            </svg>
                            <img src="assets/images/about/about-img1.jpg" alt="about" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-five-content">
                            <h6 className="small-title text-lg">OUR STORY</h6>
                            <h2 className="main-title fw-bold">Our team comes with the experience and knowledge</h2>
                            <div className="about-five-tab">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-who-tab" data-bs-toggle="tab" data-bs-target="#nav-who"
                                            type="button" role="tab" aria-controls="nav-who" aria-selected="true">Who We Are</button>
                                        <button className="nav-link" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision"
                                            type="button" role="tab" aria-controls="nav-vision" aria-selected="false">our Vision</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-who" role="tabpanel" aria-labelledby="nav-who-tab">
                                        <p>
                                            At CodeHub Technological Institute, we provide the best avenue for people to acqiure various IT skill and apply them to solve real life problems.
                                        </p>
                                        <p>
                                            We also empower people to allow them make a living by helping them become  professionals who can deliver value-oriented services to clients.
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                        <p>
                                            As the world is a global village, we want to ensure that everyone becomes employable through the acquisition of IT skills irrespective of location.
                                        </p>
                                        <p>
                                            We also hope to make the world a better place by empowering people with IT skills and putting their skills to good use.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Courses = () => {
    return (
        <section id="courses" className="services-area services-eight">
            <div className="section-title-five">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h6>Courses</h6>
                                <h2 className="fw-bold">Our Course Modules</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services" style = {{minHeight: '300px'}}>
                            <div className="service-icon">
                                <i className="fa fa-html5"></i>
                            </div>
                            <div className="service-content">
                                <h4>HTML5</h4>
                                <p>
                                    Deep learning of the newest <abbr title="HyperText Markup Language">HTML</abbr> version.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services" style = {{minHeight: '300px'}}>
                            <div className="service-icon">
                                <i className="lni lni-bootstrap"></i>
                            </div>
                            <div className="service-content">
                                <h4>Solid Bootstrap 5</h4>
                                <p>
                                    A popular <abbr title="Cascading StyleSheet">CSS</abbr> framework for responsive <abbr title="User Interface">UI</abbr> designs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services" style = {{minHeight: '300px'}}>
                            <div className="service-icon">
                                <PHPLogo />
                            </div>
                            <div className="service-content">
                                <h4>Next JS</h4>
                                <p>
                                    A React JS framework based on JavaScript for frontend development. It also allows easy backend integration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services" style = {{minHeight: '300px'}}>
                            <div className="service-icon">
                                <NextJSLogo />
                            </div>
                            <div className="service-content">
                                <h4><abbr title="PHP HyperText Preprocessor">PHP</abbr></h4>
                                <p>
                                    A server scripting language used to interact with an Apache server.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services" style = {{minHeight: '300px'}}>
                            <div className="service-icon">
                                <i className="fa fa-database"></i>
                            </div>
                            <div className="service-content">
                                <h4>MySql</h4>
                                <p>
                                    A relational database for storing retrieving data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const PricingArea = () => {
    return (
        <section id="pricing" className="pricing-area pricing-fourteen">
            <div className="section-title-five">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h6>Pricing</h6>
                                <h2 className="fw-bold">Pricing</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto col-md-10 col-12">
                        <div className="pricing-style-fourteen middle">
                            <div className="table-head">
                                <h6 className="title">Exclusive</h6>
                                <p className = 'text-caps'>our exclusive plan features all you need to have a wonderful learning experience.</p>
                                <div className="price">
                                    <h2 className="amount">
                                        <span className="currency">₦</span>100,000
                                    </h2>
                                </div>
                            </div>
                            <div className="table-content">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <p style = {{textAlign: 'left'}} className = 'text-caps my-3 text-primary underline'>What do you stand to gain?</p>
                                        <ul className="table-list">
                                            <li><i className="lni lni-checkmark-circle"></i>Acquisition of top IT skill</li>
                                            <li><i className="lni lni-checkmark-circle"></i>Expertise in a modern web development framework</li>
                                            <li><i className="lni lni-checkmark-circle"></i>Frontend development with Next.JS</li>
                                            <li><i className="lni lni-checkmark-circle"></i>Backend development with PHP</li>
                                            <li><i className="lni lni-checkmark-circle"></i>Web hosting and deployment experience</li>
                                            <li><i className="lni lni-checkmark-circle"></i>A recognised certification in full stack web development</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <p style = {{textAlign: 'left'}} className = 'text-caps text-left my-3 text-primary underline'>Our learning experience?</p>
                                        <ul className="table-list">
                                            <li><i className="lni lni-checkmark-circle"></i>A condusive learning environment</li>
                                            <li><i className="lni lni-checkmark-circle"></i>A display screen for easy follow up during learning</li>
                                            <li><i className="lni lni-checkmark-circle"></i>Mentorship during and after the duration of the course</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="light-rounded-buttons">
                                <a href = 'https://ravesandbox.flutterwave.com/pay/7tgpswawqt4s' className="btn primary-btn">
                                    proceed to payment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CTAArea = () => {
    return (
        <section id="call-action" className="call-action">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                        <div className="inner-content">
                            <h2>We love to make perfect <br />solutions for your business</h2>
                            <p>
                                Why I say old chap that is, spiffing off his nut cor blimey
                                guvnords geeza<br />
                                bloke knees up bobby, sloshed arse William cack Richard. Bloke
                                fanny around chesed of bum bag old lost the pilot say there
                                spiffing off his nut.
                            </p>
                            <div className="light-rounded-buttons">
                                <a className="btn primary-btn-outline">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Blog = () => {
    return (
        <div id="blog" className="latest-news-area section">
            <div className="section-title-five">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h6>latest news</h6>
                                <h2 className="fw-bold">Latest News & Blog</h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-news">
                            <div className="image">
                                <a><img className="thumb" src="assets/images/blog/1.jpg" alt="Blog" /></a>
                                <div className="meta-details">
                                    <img className="thumb" src="assets/images/blog/b6.jpg" alt="Author" />
                                    <span>BY TIM NORTON</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title">
                                    <a> Make your team a Design driven company </a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-news">
                            <div className="image">
                                <a><img className="thumb" src="assets/images/blog/2.jpg" alt="Blog" /></a>
                                <div className="meta-details">
                                    <img className="thumb" src="assets/images/blog/b6.jpg" alt="Author" />
                                    <span>BY TIM NORTON</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title">
                                    <a>
                                    The newest web framework that changed the world
                                    </a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-news">
                            <div className="image">
                                <a><img className="thumb" src="assets/images/blog/3.jpg" alt="Blog" /></a>
                                <div className="meta-details">
                                    <img className="thumb" src="assets/images/blog/b6.jpg" alt="Author" />
                                    <span>BY TIM NORTON</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title">
                                    <a>
                                    5 ways to improve user retention for your startup
                                    </a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Clients = () => {
    return (
        <div id="clients" className="brand-area section">
            <div className="section-title-five">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h6>Meet our Partners</h6>
                                <h2 className="fw-bold">Our Awesome Partners</h2>
                                <p>
                                    We partnered with popular IT learning hubs to bring you the very best in this training exercise
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-12">
                        <div className="clients-logos">
                            <div className="single-image bg-primary">
                                <img src="assets/images/Softrays IT.png" alt="Softrays IT" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Contact = () => {
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [response, setResponse] = useState({
        visible: false,
        theme: 'danger',
        message: 'Empty response!'
    })

    const formResponse = (obj) => {
        setResponse({
            ...response,
            ...obj
        })
    }
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="contact-item-wrapper">
                            <div className="row">
                                <div className="col-12 col-md-6 col-xl-12">
                                    <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="lni lni-phone"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h4>Contact</h4>
                                        <p><a href="tel:+234 810 1851 368">+234 810 1851 368</a></p>
                                        <p><a href="tel:+234 708 4712 978">+234 708 4712 978</a></p>
                                        <p><a href="mailto:codehub.ti@gmail.com">codehubcti@gmail.com</a></p>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-none col-12 col-md-6 col-xl-12">
                                    <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="lni lni-map-marker"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h4>Address</h4>
                                        <p>175 5th Ave, New York, NY 10010</p>
                                        <p>United States</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-none col-12 col-md-6 col-xl-12">
                                    <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="lni lni-alarm-clock"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h4>Schedule</h4>
                                        <p>24 Hours / 7 Days Open</p>
                                        <p>Office time: 10 AM - 5:30 PM</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="contact-form-wrapper">
                            <div className="row">
                                <div className="col-xl-10 col-lg-8 mx-auto">
                                    <div className="section-title text-center">
                                        <span> Get in Touch </span>
                                        <h2>
                                            Ready to Get Started
                                        </h2>
                                        <p>
                                            Leave us a message and be sure to get a response!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit = {async (e) => {
                                e.preventDefault()

                                const req = await fetch(`${server.backend.url}/php/processes/Messages.php`, {
                                    body: JSON.stringify(contactFormData),
                                    method: 'POST'
                                })
                                const {type, message} = await req.json()

                                formResponse({
                                    visible: true,
                                    theme: type === 'success' ? type : 'danger',
                                    message: message
                                })

                                if(type === 'success'){
                                    setContactFormData({name: '', email: '', phone: '', subject: '', message: ''})
                                    setTimeout(() => {
                                        formResponse({visible: false})
                                    }, 2000);
                                }
                            }} className="contact-form">
                                <div className="row">{
                                    (response.visible)
                                    ? (
                                        <div key = {new Date().getTime} className = 'animated fadeIn col-12 pb-5'>
                                            <div style = {{borderRadius: '10px'}} className={`p-3 rounded-1x shadow-sm text-light fo-s-15 text-caps bg-${response.theme}`}>
                                                {response.message}
                                            </div>
                                        </div>
                                    )
                                    : <></>
                                }<div className="col-md-6">
                                        <input type="text" onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                name: e.target.value
                                            })
                                        }} value = {contactFormData.name} name="name" id="name" placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                email: e.target.value
                                            })
                                        }} value = {contactFormData.email} name="email" id="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                phone: e.target.value
                                            })
                                        }} value = {contactFormData.phone} name="phone" id="phone" placeholder="Phone" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                subject: e.target.value
                                            })
                                        }} value = {contactFormData.subject} name="subject" id="email" placeholder="Subject" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <textarea name="message" onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                message: e.target.value
                                            })
                                        }} value = {contactFormData.message} id="message" placeholder="Type Message" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="button text-center rounded-buttons">
                                            <button type="submit" className="btn primary-btn rounded-full">
                                            Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MapSection = () => {
    return (
        <section className="map-section">
            <div className="map-container">
                <object style={{border: 0, height: '500px', width: '100%'}}
                    data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707">
                </object>
            </div>
        </section>
    )
}

const Footer = ({year}) => {
    const [footerNewsletterData, setFooterNewsletterData] = useState({
        email: ''
    })

    const [response, setResponse] = useState({
        visible: false,
        theme: 'danger',
        message: 'Empty response!'
    })

    const formResponse = (obj) => {
        setResponse({
            ...response,
            ...obj
        })
    }

    return (
        <footer className="border-top bg-light footer-area footer-eleven">
            <div className="footer-top">
                <div className="container">
                    <div className="inner-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-widget f-about">
                                    <div className="logo">
                                        <a href="/">
                                            <img src="assets/images/cti-logo.png" style = {{height: '100px'}} alt="#" className="img-fluid" />
                                        </a>
                                    </div>
                                    <p>
                                        Making the world a better place with Information Technology
                                    </p>
                                    <p className="copyright-text">
                                        <span>© {year} CodeHub Technological Institute.</span>Designed and Developed by
                                        <a href="/"> CodeHub Technological Institute </a>
                                    </p>
                                </div>
                            </div>
                            <div className="d-none col-lg-2 col-md-6 col-12">
                                <div className="footer-widget f-link">
                                    <h5>Solutions</h5>
                                    <ul>
                                        <li><a>Marketing</a></li>
                                        <li><a>Analytics</a></li>
                                        <li><a>Commerce</a></li>
                                        <li><a>Insights</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-none col-lg-2 col-md-6 col-12">
                                <div className="footer-widget f-link">
                                    <h5>Support</h5>
                                    <ul>
                                        <li><a>Pricing</a></li>
                                        <li><a>Documentation</a></li>
                                        <li><a>Guides</a></li>
                                        <li><a>API Status</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-widget newsletter">
                                    <h5 className = 'mt-4'>Subscribe</h5>
                                    <p>Subscribe to our newsletter for the latest updates</p>{
                                        (response.visible)
                                        ? (
                                            <div data-timestamp = {new Date().getTime()} className = 'animated fadeIn col-12 pt-4'>
                                                <div style = {{borderRadius: '10px'}} className={`p-3 rounded-1x shadow-sm text-light fo-s-15 text-caps bg-${response.theme}`}>
                                                    {response.message}
                                                </div>
                                            </div>
                                        )
                                        : <></>
                                    }
                                    <form onSubmit = {async (e) => {
                                        e.preventDefault()

                                        const req = await fetch(`${server.backend.url}/php/processes/Newsletter.php`, {
                                            body: JSON.stringify(footerNewsletterData),
                                            method: 'POST'
                                        })
                                        const {type, message} = await req.json()
        
                                        formResponse({
                                            visible: true,
                                            theme: type === 'success' ? type : 'danger',
                                            message: message
                                        })

                                        if(type === 'success'){
                                            setFooterNewsletterData({email: ''})
                                            setTimeout(() => {
                                                formResponse({visible: false})
                                            }, 2000);
                                        }
                                    }} className="newsletter-form">
                                        <input name="email" onChange = {(e) => {
                                            setFooterNewsletterData({
                                                ...footerNewsletterData,
                                                email: e.target.value
                                            })
                                        }} value = {footerNewsletterData.email} placeholder="Email address" required="required" type="email" />
                                        <div className="button">
                                            <button className="sub-btn">
                                                <i className="lni lni-envelope"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const ScrollToTop = () => {
    return (
        <a href="#" className="scroll-top btn-hover">
            <i className="lni lni-chevron-up"></i>
        </a>
    )
}

export function getServerSideProps(){
    return {
        props: {
            Footer: {
                year: new Date().getFullYear()
            }
        }
    }
}
