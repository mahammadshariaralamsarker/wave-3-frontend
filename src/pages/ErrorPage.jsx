import { Link } from "react-router-dom";

const ErrorPage = () => {


    return (
        <div className="text-center mt-96 space-y-10">
         <h1 className="text-6xl font-bold">Oops! Something went wrong.</h1>
         <p className="text-5xl font-medium">We apologize for the inconvenience.</p>
         <Link to="/" className="btn text-3xl  bg-green-500 text-white"> Back to Home</Link>
    </div>
    );
};

export default ErrorPage;