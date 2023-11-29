import { Helmet } from "react-helmet";

export default function Map() {
    return (
        <>
            <Helmet>
                <link href='https://food-access-widget-cdn.azureedge.net/accessfood-widget/index.css' rel="stylesheet"></link>
                <script src='https://food-access-widget-cdn.azureedge.net/accessfood-widget/index.js'></script>
            </Helmet>

            <h1>Map</h1>

            <div className="accessfood-widget" data-map={import.meta.env.VITE_MAP_TOKEN} data-environment="Production"></div >
        </>
    )
}