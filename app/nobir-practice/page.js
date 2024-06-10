import Link from "next/link";

function Posts({ posts }) {
  return (
    <ul>
      {/* {posts.map((post) => (  */}
        {/* <li key={post.id}> */}
          <Link
            href={{
              pathname: "/blog",
              query: { slug: 'nobir' },
            }}
          >
            got to block page
          </Link>
        {/* </li> */}
      {/* ))} */}
    </ul>
  );
}

export default Posts;
