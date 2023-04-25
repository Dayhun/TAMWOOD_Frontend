# React

## How to use - example

```js
function MenuList() {
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
function MegaMenu() {
    return (
        <nav>
            <MenuList />
        </nav>
    );
}
function HeaderTitle(props) {
    return <h2>{props.name}</h2>;
}
function FooterPage() {
    return (
        <footer>
            <MenuList />
        </footer>
    );
}
function App() {
    return (
        <React.Fragment>
            <HeaderTitle name={"Natt"} />
            <MegaMenu />
            <FooterPage />
        </React.Fragment>
    );
}

// Way 1.
// const rootHtml = ReactDOM.createRoot(document.getElementById("root"));
// rootHtml.render(<App />);
// Way 2.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```
