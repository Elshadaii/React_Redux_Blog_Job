import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryBlogs = () => {
  const params = useParams();
  const categoryId = params.categoryId;

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(
          `https://frozen-bastion-26115.herokuapp.com/api/categories/${categoryId}/blogs`
        );

        setBlogs(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchBlogs();
  }, []);

  console.log(blogs);
  return (
    <>
      <h4 class='font-bold text-primary '>Category Blogs </h4> {isError && <div> Something went wrong... </div>}
      {isLoading && <p> Loading... </p>}
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.blog_id} className="m-10">
            <h6> {blog.title} </h6> <p> {blog.content} </p>{" "}
          </div>
        ))
      ) : (
        <p> No Blog Post Found </p>
      )}{" "}
    </>
  );
};

export default CategoryBlogs;
