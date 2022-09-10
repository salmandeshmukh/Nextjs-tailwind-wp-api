import React from 'react'
import Link from 'next/link'

const Home = (props) => {
    return (
        <>
        <div className="container px-5 py-24 mx-auto">
            <section className="text-gray-600 body-font overflow-hidden">
                                
            {props.data.map((post,index) => {
return (
                <div className="container px-5 py-24 mx-auto" key={index.id}>                    
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={post['_embedded']['wp:featuredmedia'][0]['source_url']} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium my-2">{post['title']['rendered']}</h1>
                                <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }}></div>
                                <div className="flex">
                                    <Link href="/blogs"><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Back to blogs</button></Link>
                                </div>
                            </div>
                        </div>
                    
                </div>
                )

                })}

{/* {props.data.map((post,index) => {
        return (
          <div className="row" key={index}>
            <h1 className="text-center mt-3">{post['title']['rendered']}</h1>
            <div className="col-md-12 mt-2 text-center d-flex justify-content-center">
              <img src={post['_embedded']['wp:featuredmedia'][0]['source_url']} className="card-img-top" alt="..." />
            </div>
            <div className="col-md-12">
              <div className="card-text card-body-p" dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }}></div>
              <Link href="/"><a className="btn btn-primary text-center mb-5">Back to Home</a></Link>
            </div>
          </div>
        )
      })} */}
                
            </section>
            </div>

        </>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://www.etcsfzc.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data: data }
    }
}

export default Home



