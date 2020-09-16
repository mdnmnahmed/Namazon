import Link from 'next/link'
const Home = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <Link href="/products"><a>Goto Products</a></Link>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/hello')
    const data = await res.json()
    console.log(data);

    return {
        props: { name: data.name },
    }
}


export default Home;
