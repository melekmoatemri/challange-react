import React from "react";
import logo1 from "../images/proj1.jpg";
import logo2 from "../images/proj2.jpg";
import logo3 from "../images/proj3.jpg";
import logo4 from "../images/proj4.jpg";
const Projects = () => {
    return (
        <div>
            <section id="projects">
                <h2 className="text-important">Projects</h2>
                <div class="projects-container">
                    <div className="project-card">
                        <img src={logo1} alt="project" />
                        <h3>Project 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus ex natus quis beatae perspiciatis
                            repellat laudantium aliquam.
                        </p>
                        <p>
                            <a href="#">Github Link</a>
                        </p>
                    </div>

                    <div className="project-card">
                        <img src={logo2} alt="project" />
                        <h3>Project 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus ex natus quis beatae perspiciatis
                            repellat laudantium aliquam.
                        </p>
                        <p>
                            <a href="#">Github Link</a>
                        </p>
                    </div>

                    <div className="project-card">
                        <img src={logo3} alt="project" />
                        <h3>Project 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus ex natus quis beatae perspiciatis
                            repellat laudantium aliquam.
                        </p>
                        <p>
                            <a href="#">Github Link</a>
                        </p>
                    </div>

                    <div className="project-card">
                        <img src={logo4} alt="project" />
                        <h3>Project 4</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus ex natus quis beatae perspiciatis
                            repellat laudantium aliquam.
                        </p>
                        <p>
                            <a href="#">Github Link</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
