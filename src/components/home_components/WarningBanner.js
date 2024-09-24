import React from "react";

const WarningComponent = () => {
    return (
        <div className="border-2 border-green-600 bg-green-500 text-white px-4 py-2 rounded-md flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="flex items-center">
                    <img
                        src="/warning_svg/security-check.webp"
                        alt="Temu's Commitments Icon"
                        className="h-5 w-5 text-white"
                    />
                    <span className="font-bold ml-1">Temu's Commitments</span>
                </div>
                <div className="flex space-x-4">
                    <div className="flex items-center">
                        <svg
                            className="h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4.5v15m0 0H7m5 0h5"
                            />
                        </svg>
                        <span className="ml-1">Secure privacy</span>
                    </div>
                    <div className="flex items-center">
                        <svg
                            className="h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.5 10.5h13M5.5 7h13m-13 7h7"
                            />
                        </svg>
                        <span className="ml-1">Safe payments</span>
                    </div>
                    <div className="flex items-center">
                        <svg
                            className="h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 7l1.793-1.793a1 1 0 011.414 0L7 7m10 0l1.793-1.793a1 1 0 011.414 0L21 7m-18 0v10a1 1 0 001 1h16a1 1 0 001-1V7m-5 0H7"
                            />
                        </svg>
                        <span className="ml-1">Delivery guarantee</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1 4h.01M12 8h.01M21 12c0 4.418-3.582 8-8 8S5 16.418 5 12s3.582-8 8-8 8 3.582 8 8z"
                    />
                </svg>
                <span className="text-yellow-100">
                    Be wary of messages about delivery issues claiming to be from USPS.
                </span>
                <a href="#" className="text-white underline">
                    View
                </a>
            </div>
        </div>
    );
};

export default WarningComponent;
