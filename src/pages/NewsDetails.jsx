import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightSide from "../components/RightSide";
import { FaArrowLeft } from "react-icons/fa6";


const NewsDetails = () => {
    const { data } = useLoaderData()
    const {image_url,  title,details,category_id } = data[0]
    return (
        <div className="container mx-auto my-10">
            <header>
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 gap-10 ">
                <section className="col-span-9 my-5">
                    <div className="card card-compact p-6 bg-base-100 ">
                        <figure>
                            <img className="w-full"
                                src={image_url}
                                 />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions justify-start">
                                <Link to={`/category/${category_id}`} className="btn text-white bg-[#D72050]"> <FaArrowLeft></FaArrowLeft>All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightSide></RightSide>
                </aside>

            </main>
        </div>

    );
};

export default NewsDetails;