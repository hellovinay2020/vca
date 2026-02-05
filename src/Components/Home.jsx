import React, { useEffect, useState } from 'react';
import './Home.css';
import Slider from './Slider';
import Notice from './Notice';
import WelcomeSection from './WelcomeSection';
import FeatureCard from './FeatureCard';
import AllServices from './AllServices';
import Testimonials from './Testimonials';
import FAQSection from './FAQSection';
import AnotherCourse from './AnotherCourse';
import Loader from './Loader';
import ContactButtons from './ContactButtons';
import LearningSection from './LearningSection';
import TopperStudents from './TopperStudents';






const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay (e.g., fetching data)
        const timer = setTimeout(() => {
            setLoading(false); // loader hat jayega yaha
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div>

                    <Slider />
                    <Notice />
                    <WelcomeSection />
                    <LearningSection />
                    <TopperStudents />
                    <FeatureCard />
                    <AllServices />
                    <AnotherCourse />
                    <Testimonials />
                    <FAQSection />
                    <ContactButtons />

                </div>
            )}
        </>
    );
};

export default Home;
