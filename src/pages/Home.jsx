import Carousel from './../Components/Carousel.jsx';
// import TabCategories from '../Components/TabCategories.jsx';
import { useLoaderData } from 'react-router-dom';
import OurGuides from '../Components/OurGuide.jsx';
import { Helmet } from 'react-helmet-async';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import FAQ from './Faq.jsx';
import Product from './Product.jsx';

const Home = () => {
    const jobs = useLoaderData()
    return (
            <div className='container mx-auto'>
            <Helmet><title>Home</title></Helmet>
                <Carousel></Carousel>
                <Product></Product>
                <OurGuides></OurGuides>
                <AboutUs></AboutUs>
                <FAQ></FAQ>
                <ContactUs></ContactUs>
            </div>
    );
};

export default Home;