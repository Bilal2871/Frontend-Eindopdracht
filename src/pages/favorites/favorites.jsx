import '../overview/overview.css';
import Favorites from "../../components/favorites/favorites.jsx";

function Overview(){
    return (
        <section id="overviewContainer">
            <h1>Favorieten</h1>
            <Favorites />
        </section>
    )
}

export default Overview;