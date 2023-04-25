// Header
function SocialMedia() {
    // just allow one single tag
    return (
        <ul>
            <li>
                <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </li>
        </ul>
    );
}

function PageMenu() {
    return (
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#team">Team</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    );
}

function MobileMenu() {
    return (
        <details>
            <summary className="fa-solid fa-bars"></summary>
            <PageMenu />
        </details>
    );
}

function NavigationMenu() {
    return (
        <nav>
            <article>
                <div>
                    <i className="fa-solid fa-fan"></i>
                </div>
                <h3>FLEX</h3>
            </article>
            <PageMenu />
            <MobileMenu />
        </nav>
    );
}

function HeaderPage() {
    return (
        <header>
            <section>
                <SocialMedia />
                <NavigationMenu />
                <article>
                    <h2>DIGITAL MARKETING</h2>
                    <h5>MORE VISITORS TO YOUR WEBSITE</h5>
                    <a href="#"> LET US DESIGN </a>
                </article>
            </section>
        </header>
    );
}

function TitleRow(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
    );
}

// Main
// Services
function ServicesContent(props) {
    return (
        <div>
            <i className={props.className}></i>
            <h4>{props.title}</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, tempore.
            </p>
        </div>
    );
}

function ServicesRow() {
    return (
        <section className="row services" id="services">
            <TitleRow title="Our Services" />
            <section>
                <ServicesContent
                    className="fa-regular fa-file-code"
                    title="HTML5 CODING"
                />
                <ServicesContent
                    className="fa-solid fa-paper-plane"
                    title="OUR SUPPORT"
                />
                <ServicesContent
                    className="fa-solid fa-building-columns"
                    title="OUR DESIGN"
                />
                <ServicesContent
                    className="fa-solid fa-flask"
                    title="GO FOR MOBILE"
                />
            </section>
        </section>
    );
}

// Portfolio
const picList = [
    {
        url: "./img/pic-01.jpg",
        alt: "pic-01",
        title: "new walk",
    },
    {
        url: "./img/pic-02.jpg",
        alt: "pic-02",
        title: "new boat",
    },
    {
        url: "./img/pic-03.jpg",
        alt: "pic-03",
        title: "Big City",
    },
    {
        url: "./img/pic-04.jpg",
        alt: "pic-04",
        title: "Gray Street",
    },
    {
        url: "./img/pic-05.jpg",
        alt: "pic-05",
        title: "Office",
    },
    {
        url: "./img/pic-06.jpg",
        alt: "pic-06",
        title: "New Environment",
    },
    {
        url: "./img/pic-07.jpg",
        alt: "pic-07",
        title: "Venice",
    },
    {
        url: "./img/pic-08.jpg",
        alt: "pic-08",
        title: "Train Trail",
    },
];

function PortfolioPicture(props) {
    return (
        <figure>
            <img src={props.src} alt={props.alt} />
            <figcaption>
                <h5>{props.title}</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a href="#">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
            </figcaption>
        </figure>
    );
}

function PortfolioRow() {
    return (
        <section className="row portfolio" id="portfolio">
            <TitleRow title="Our Portfolio" />
            <section>
                {picList.map((picture) => (
                    <PortfolioPicture
                        src={picture.url}
                        alt={picture.alt}
                        title={picture.title}
                        key={picture.alt}
                    />
                ))}
            </section>
        </section>
    );
}

// Team
const teamMembers = [
    {
        url: "./img/pic-17.jpg",
        alt: "pic-17",
        name: "CINDY",
        position: "DEVELOPER",
    },
    {
        url: "./img/pic-16.jpg",
        alt: "pic-16",
        name: "JIM",
        position: "SALESMAN",
    },
    {
        url: "./img/pic-15.jpg",
        alt: "pic-15",
        name: "KEVIN",
        position: "ACCOUNTANT",
    },
    {
        url: "./img/pic-14.jpg",
        alt: "pic-14",
        name: "MICHAEL",
        position: "MANAGER",
    },
];

function GalleryTeam(props) {
    return (
        <figure>
            <img src={props.src} alt={props.alt} />
            <figcaption>
                <h4>{props.name}</h4>
                <small>{props.position}</small>
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </figcaption>
        </figure>
    );
}

function TeamRow() {
    return (
        <section className="row team" id="team">
            <TitleRow title="Our Team" />
            <section>
                <article className="team-gallery">
                    {teamMembers.map((member) => (
                        <GalleryTeam
                            src={member.url}
                            alt={member.alt}
                            name={member.name}
                            position={member.position}
                            key={member.name}
                        />
                    ))}
                </article>
                <TeamSkills />
            </section>
        </section>
    );
}

function TeamSkills() {
    return (
        <section className="skills" id="skills">
            <article>
                <h3>Design Skills</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <section>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae sed, odio eius, velit quibusdam nihil
                        officia iusto doloremque suscipit alias doloribus.
                        Laboriosam earum obcaecati placeat amet dicta velit
                        deleniti totam error! Voluptatibus veniam placeat porro
                        excepturi unde maiores necessitatibus quisquam quidem?
                        Saepe nam aut laborum?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis expedita modi assumenda possimus!
                        Dolores, minus maiores fuga sunt cupiditate consequatur,
                        eveniet quisquam voluptas dolorum natus suscipit
                        dignissimos recusandae enim tempora unde? Fugiat
                        perferendis dicta id magni. Totam corrupti, quisquam
                        facilis vel possimus non aliquid perspiciatis eum
                        consequatur quaerat itaque eligendi.
                    </p>
                </div>
                <ul>
                    <li>
                        <h6>
                            <small> photoshop 90% </small>
                        </h6>
                    </li>
                    <li>
                        <h6>
                            <small> HTML CSS 80% </small>
                        </h6>
                    </li>
                    <li>
                        <h6>
                            <small> development 70% </small>
                        </h6>
                    </li>
                    <li>
                        <h6>
                            <small> marketing 80% </small>
                        </h6>
                    </li>
                </ul>
            </section>
        </section>
    );
}

// Contact
function ContactRow() {
    return (
        <section class="row contact" id="contact">
            <TitleRow title="Contact" />
            <section>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente modi debitis illo, autem magnam, iure odit
                        ipsum quae, porro unde repudiandae voluptas cum.
                        Eligendi a repellendus at vero fuga possimus iure! Alias
                        fugiat quo nesciunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Temporibus, dicta impedit! Iure expedita aliquam
                        ipsa reiciendis magnam natus recusandae modi molestias
                        autem eum placeat aut, voluptatibus, temporibus adipisci
                        porro quia.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Totam sequi, delectus maiores aperiam nostrum id,
                        omnis quisquam, ratione dicta adipisci a quo cumque
                        provident optio.
                    </p>
                    <ul>
                        <li>Phone: 033-033-0660</li>
                        <li>
                            Email:
                            <a href="mailto:info@company.com">
                                info@company.com
                            </a>
                        </li>
                        <li>
                            Address:
                            <address>
                                880 De Best Studio, Fork Street, San Francisco
                            </address>
                        </li>
                    </ul>
                </article>
                <section>
                    <form action="#">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                        />
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                        ></textarea>
                        <input type="submit" value="SEND MESSAGE" />
                    </form>
                </section>
            </section>
        </section>
    );
}

// Footer
function FooterRow() {
    return (
        <footer>
            <p>Copyright &copy; 2030 Company Name. Design: Flex Design</p>
            <a href="#"> BACK TO TOP </a>
        </footer>
    );
}

// Main Final
function MainContent() {
    return (
        <main>
            {/* Services row */}
            <ServicesRow />
            {/* Portfolio row */}
            <PortfolioRow />
            {/* Team row */}
            <TeamRow />
            {/* Contact row */}
            <ContactRow />
        </main>
    );
}

// Final
function App() {
    return (
        <React.Fragment>
            <HeaderPage />
            <MainContent />
            <FooterRow />
        </React.Fragment>
    );
}

// Way 1.
// const rootHtml = ReactDOM.createRoot(document.getElementById("root"));
// rootHtml.render(<App />);
// Way 2.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
