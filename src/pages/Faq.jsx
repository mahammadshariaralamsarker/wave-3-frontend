import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className="text-6xl font-bold text-center my-8">Frequently Asked Questions</h1>
            <details className="collapse border-2 my-5">
                <summary className="collapse-title text-xl font-medium border">
                    <div className="flex justify-between">
                        <h1>What is the return policy?</h1>
                        <h1>&gt;&gt;&gt;&gt;</h1>
                    </div>
                </summary>
                <div className="collapse-content">
                    <p className="text-3xl">
                        Our return policy allows you to return products within 30 days of purchase for a full refund 
                        or exchange, provided the items are in original condition.
                    </p>
                </div>
            </details>
            <details className="collapse border-2 my-5">
                <summary className="collapse-title text-xl font-medium border">
                    <div className="flex justify-between">
                        <h1>How long does shipping take?</h1>
                        <h1>&gt;&gt;&gt;&gt;</h1>
                    </div>
                </summary>
                <div className="collapse-content">
                    <p className="text-3xl">
                        Shipping typically takes 3-7 business days, depending on your location. We provide tracking 
                        information so you can monitor your order's progress.
                    </p>
                </div>
            </details>
            <details className="collapse border-2 my-5">
                <summary className="collapse-title text-xl font-medium border">
                    <div className="flex justify-between">
                        <h1>Are there any additional fees for international orders?</h1>
                        <h1>&gt;&gt;&gt;&gt;</h1>
                    </div>
                </summary>
                <div className="collapse-content">
                    <p className="text-3xl">
                        International orders may incur customs duties or taxes depending on your country's regulations. 
                        These fees are not included in our pricing and must be paid by the customer upon delivery.
                    </p>
                </div>
            </details>
            <details className="collapse border-2 my-5">
                <summary className="collapse-title text-xl font-medium border">
                    <div className="flex justify-between">
                        <h1>Can I cancel my order after placing it?</h1>
                        <h1>&gt;&gt;&gt;&gt;</h1>
                    </div>
                </summary>
                <div className="collapse-content">
                    <p className="text-3xl">
                        Yes, you can cancel your order within 24 hours of placing it. After this window, cancellations 
                        may not be possible as processing begins immediately.
                    </p>
                </div>
            </details>
            <details className="collapse border-2 my-5">
                <summary className="collapse-title text-xl font-medium border">
                    <div className="flex justify-between">
                        <h1>Do you offer customer support?</h1>
                        <h1>&gt;&gt;&gt;&gt;</h1>
                    </div>
                </summary>
                <div className="collapse-content">
                    <p className="text-3xl">
                        Absolutely! Our customer support team is available 24/7 to assist you. You can contact us via 
                        email, phone, or live chat for any queries or concerns.
                    </p>
                </div>
            </details>
        </div>
    );
};

export default FAQ;
