import React from 'react';
import Bio from "../../assets/IMG_6171.jpg"

const Profile = () => {
    return (
        <div>
        <main className="container cont">
        {/* <!-- This is the main header for the article. (About Me) --> */}
        <header className="row">
          <section className="col">
            <h1>About Me</h1>
          </section>
        </header>
        {/* <!-- The article contains an image and short bio. --> */}
        <article className="row">
          <figure className="col">
            <img className="img" src={Bio} alt="me" />
            <p>
              My name is Dennis Francis. I am currently enrolled in the Full Stack
              Flex Boot Camp with GA Tech. My back ground is in Exhibit Design and
              the design of large format graphics. I was in the Exhibit industry
              for 20 years. I enjoyed Exhibit Design because I not only was able
              to create a pretty picture but it also lead to the construction of a
              physical structure. In Web Development I am doing something very
              similar. I am creating a great design but also creating the bones of
              the web site. Along with making sure it all works together. I plan
              to blend my skills as a designer with the skills I learn in web
              development to be come a great Full Stack Web Developer.
            </p>
          </figure>
        </article>
        {/* <!-- This article contains links to email and social media. --> */}
        <article className="row">
          <section className="" class="col">
            <p>
              These are links to my GitHub, Linked In, and Email. Click them if you
              want to learn more about me or just send me an email. Feel free to
              leave your information on the contact page.
            </p>
            <ul>
              <li>
                <a href="https://github.com/dnfrancis22"
                  >GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dennis-francis/"
                  >LinkedIn</a>
              </li>
              <li>
                <a href="mailto:dnfrancis22@gmail.com">dnfrancis22@gmail.com</a>
              </li>
              <li>Mobile:(678)-571-4153</li>
              </ul>
          </section>
        </article>
      </main>
        </div>
    );
};

export default Profile;