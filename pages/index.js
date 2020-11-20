const Home = ({ products }) => {
    const ProductList = products.map((singleProduct) => {
        return (
            <>
                <div className="card" key={singleProduct._id}>
                    <div className="card-image">
                        <img src={singleProduct.mediaUrl} />
                        <span className="card-title">{singleProduct.name}</span>
                    </div>
                    <div className="card-content">
                        <p>RS {singleProduct.price}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </>
        )
    });

    return (
        <div className="">
            <div className="cardDiv ml-20">
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
                {ProductList}
            </div>
        </div>
    )
}





export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()

    return {
        props: {
            products: data
        }
    }
}












// export async function getStaticProps(context) {
//     const res = await fetch('http://localhost:3000/api/products')
//     const data = await res.json()
//     console.log(data);

//     return {
//         props: {name: data.name },
//     }
// }


export default Home;
