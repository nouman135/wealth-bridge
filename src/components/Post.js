import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Posts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addPost = (post) => {
    dispatch(addCart(post));
  };

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getPosts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterPost = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  const ShowPosts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterPost("men's clothing")}
          >
            Bond
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterPost("women's clothing")}
          >
            Equity
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterPost("jewelery")}
          >
            Real Estate
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterPost("electronics")}
          >
            Crypto
          </button>
        </div>

        {filter.map((post) => {
          return (
            <div
              id={post.id}
              key={post.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={post.id}>
                <div className="card-body">
                  <h5 className="card-title">
                    {/* {post.title.substring(0, 12)}... */}
                    Title Here
                  </h5>
                  <p className="card-text">
                    {/* {post.description.substring(0, 90)}... */}
                    Description Here
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">£ {post.price}</li>
                </ul>
                <div className="card-body">
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addPost(post)}
                  >
                    Wallet
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Idea view</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowPosts />}
        </div>
      </div>
    </>
  );
};

export default Posts;
