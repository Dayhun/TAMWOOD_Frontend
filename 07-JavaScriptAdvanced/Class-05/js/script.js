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
    },
    {
        url: "./img/pic-02.jpg",
        alt: "pic-02",
    },
    {
        url: "./img/pic-03.jpg",
        alt: "pic-03",
    },
    {
        url: "./img/pic-04.jpg",
        alt: "pic-04",
    },
    {
        url: "./img/pic-05.jpg",
        alt: "pic-05",
    },
    {
        url: "./img/pic-06.jpg",
        alt: "pic-06",
    },
    {
        url: "./img/pic-07.jpg",
        alt: "pic-07",
    },
    {
        url: "./img/pic-08.jpg",
        alt: "pic-08",
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
                <PortfolioPicture
                    src="./img/pic-01.jpg"
                    alt="pic-1"
                    title="new walk"
                />
            </section>
        </section>
    );
}

// Main
function MainContent() {
    return (
        <main>
            {/* Services row */}
            <ServicesRow />
            {/* Portfolio row */}
            <PortfolioRow />
            {/* Team row */}
            {/* Contact row */}
        </main>
    );
}

// Final
function App() {
    return (
        <React.Fragment>
            <HeaderPage />
            <MainContent />
        </React.Fragment>
    );
}

// Way 1.
// const rootHtml = ReactDOM.createRoot(document.getElementById("root"));
// rootHtml.render(<App />);
// Way 2.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
