export default function Resume() {
  return (
    <>
      <div
        style={{
          width: "80vw",
          height: "75vh",
          marginLeft: "10vw",
          marginTop: "15vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          id="left-info-div"
          style={{
            width: "40%",
            height: "100%",
            textAlign: "justify",
            textJustify: "inter-word",
            // border: "1px solid grey",
          }}
        >
          <ul className="mt-3 mr-3">
            <h2>
              <b>TECHNICAL SKILLS</b>
            </h2>
            <hr style={{ border: "1px solid grey", width: "70%" }} />
            <li className="ml-4">
              <b>Frontend</b> - JavaScript, React Js
            </li>
            <li className="ml-4">
              <b>Backend</b> - Node.js
            </li>
            <li className="ml-4">
              <b>DevOps</b> - AWS
            </li>
            <li className="ml-4">
              <b>Database</b> - MongoDB, PostgreSQL, MySQL
            </li>
            <li className="ml-4">
              <b>Automation</b> - Python, Web Scraping (using nodeJS & python)
            </li>
          </ul>
          <br />

          <ul className="mt-3 mr-3">
            <h2>
              <b>EXPERIENCE</b>
            </h2>
            <hr style={{ border: "1px solid grey", width: "70%" }} />
            <li className="ml-4">
              <b>Baba Drug House:</b> Sept, 2022 - Sept, 2023
              <p className="ml-4">
                Worked on a machine learning model to analyze and plot the
                demand of different medications throughout the year.
              </p>
            </li>
            <li className="ml-4">
              <b>HLL Lifecare Ltd.:</b> Sept, 2023 -
              <p className="ml-4">
                Worked on managing an in-house built project which was being
                done for a Department of Government of India. Worked on managing
                the IT systems of multiple centres.
              </p>
            </li>
          </ul>
          <br />

          <ul className="mt-3 mr-3">
            <h2>
              <b>COURSES</b>
            </h2>
            <hr style={{ border: "1px solid grey", width: "70%" }} />
            <li className="ml-4">
              <b>Introduction to Data and Data Science</b>
              <br />
              <a
                href="https://learn.365datascience.com/certificates/CC-A2FDF85E30/"
                target="_blank "
              >
                <u>365 Data Science</u>
              </a>
              {" | "}
              <span>2022</span>
            </li>
          </ul>
          <br />

          {/* <ul className="mt-3 mr-3">
            <h2>
              <b>EDUCATION</b>
            </h2>
            <hr style={{ border: "1px solid grey", width: "70%" }} />
            <li className="ml-4">
              <b>RNS Institute of Technology, Bangalore</b>
              <br />
              <span>
                Bachelor of Technology ( Electronics & Communication )
              </span>
            </li>
          </ul>
          <br /> */}
        </div>

        <div
          id="center-projects-div"
          style={{
            height: "100%",
            width: "40%",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          <ul className="mt-3">
            <h2>
              <b>PROJECTS</b>
            </h2>
            <hr style={{ border: "1px solid grey", width: "70%" }} />
            <li className="ml-4">
              <h3>
                <b>Book Club</b>
              </h3>
              <p className="ml-4">
                A website acting as a book database which contains the basic
                info about the book. And, users can leave a comment about the
                book they have already read. Still under works with a
                collaborator.
              </p>
            </li>
            <br />
            <li className="ml-4">
              <h3>
                <b>Virtual Assistant with Django based GUI</b>
              </h3>
              <p className="ml-4">
                A virtual assistant like Google Assistant works on Laptops. Can
                be modified to work on any operating System. Accepts voice-based
                input and gives visual output on a web page made with Django.
              </p>
            </li>
          </ul>
          <br />
        </div>

        <div
          id="right-info-div"
          style={{
            width: "20%",
            height: "100%",
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // border: "1px solid grey",
          }}
        >
          <h1>
            <b>Archin Deepak</b>
          </h1>
          <br />
          <div>
            <a href="mailto:archindeepakad.ad@gmail.com" target="_blank">
              <u>Email</u>
            </a>
            {" | "}
            <a href="https://github.com/ArchinDeepakTV" target="_blank">
              <u>GitHub</u>
            </a>
            {" | "}
            <a href="https://x.com/ADeepakTV" target="_blank">
              <u>X (formerly twitter)</u>
            </a>
          </div>
          <p
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              padding: "1vw",
            }}
          >
            Full stack software developer with experience in front-end and
            back-end development
          </p>
        </div>
      </div>
    </>
  );
}
