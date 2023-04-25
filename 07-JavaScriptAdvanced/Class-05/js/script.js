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
                <NavigationMenu/>
                <article>
                    <h2>DIGITAL MARKETING</h2>
                    <h5>MORE VISITORS TO YOUR WEBSITE</h5>
                    <a href="#"> LET US DESIGN </a>
                </article>
            </section>
        </header>
    );
}

function App() {
    return (
        <React.Fragment>
            <HeaderPage />
        </React.Fragment>
    );
}

// Way 1.
// const rootHtml = ReactDOM.createRoot(document.getElementById("root"));
// rootHtml.render(<App />);
// Way 2.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
