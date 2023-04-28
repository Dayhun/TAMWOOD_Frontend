jQuery.extend({
    getJsonData: function (urlFilePath) {
        let result = null;
        $.ajax({
            docType: "json",
            async: false,
            type: "GET",
            url: urlFilePath,
            success: function (data) {
                result = data;
            },
            error: function (xhr, status, error) {
                console.error(`error : ${status}`);
            },
        });
        return result;
    },
});

const urlPictureFile = "./data/pictures.json";
let pictureList = $.getJsonData(urlPictureFile);
console.log(pictureList);

function Gallery(props){
    return(
        <figure>
            <img src={props.src} alt={props.alt} />
            <figcaption>
                <h4>{props.caption}</h4>
                <h5>Price: {props.price}</h5>
                <p>Description: {props.description}</p>
            </figcaption>
        </figure>
    )
}

function GalleryPage(){
    return (
        <section id="gallery">
            <section className="galleryPic">
                {pictureList.map((gallery) => (
                    <Gallery
                        src={gallery.src}
                        caption={gallery.caption}
                        price={gallery.price}
                        description={gallery.description}
                        alt={gallery.id}
                        key={gallery.id}
                    />
                ))}
            </section>
        </section>
    ); 
}

function App() {
    return (
        <React.Fragment>
            <GalleryPage/>
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
