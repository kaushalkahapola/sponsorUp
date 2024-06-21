import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black-100 to-black-200 text-white rounded-t-3xl mt-8 md:mt-0 font-poppins">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4">SponsorUp</h1>
                    <p className="text-sm">
                        A vibrant nexus where event organizers and sponsors unite to craft extraordinary experiences and elevate brand synergy.
                    </p>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Categories</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">All</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Music</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Sport</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Exhibition</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Business</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Photography</a>
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Resources</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">User guides</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Help Center</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Partners</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Taxes</a>
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Company</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">About</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Join us</a>
                        <a className="hover:text-primary-700 transition-all cursor-pointer" href="/">Social media</a>
                    </nav>
                </div>
            </div>
            <div>
                <p className="text-center py-4">
                    © Developed by
                    <span className="font-semibold text-primary-800"> DevTitans </span>
                    All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;

