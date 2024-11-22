const ContactUs = () => {
    return (
        <div className="border shadow-2xl w-full max-w-lg mx-auto p-5 space-y-6">
            <h1 className="font-bold text-4xl text-center">Contact Us</h1>
            <p className="text-lg font-medium text-center">
                Please provide your information and message, and we will get in touch with you.
            </p>

            {/* Form Fields */}
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="text-2xl font-semibold">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="input shadow-sm w-full border-2 border-gray-300 rounded-md p-2 mt-1"
                        placeholder="Your Name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="text-2xl font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="input shadow-sm w-full border-2 border-gray-300 rounded-md p-2 mt-1"
                        placeholder="Your Email"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="text-2xl font-semibold">Message</label>
                    <textarea
                        id="message"
                        className="input shadow-sm w-full border-2 border-gray-300 rounded-md p-2 mt-1"
                        placeholder="Your Message"
                        rows="5"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn w-full bg-red-400 text-white text-xl py-2 rounded-md hover:bg-red-500 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
