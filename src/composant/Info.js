import React from "react";
import logo from "../images/John-Doe.jpg"
const Info = () => {
    return (
        <div>
            <section id="about-me">
                <h1>
                    Hello, my name is
                    <span class="rotate text-important">John doe</span>,<br />
                    and i make horrible websites.
                </h1>
                <img
                    className="avatar"
                    src={logo}
                    alt="jhon-doe"
                />
            </section>
        </div>
    );
};

export default Info;
