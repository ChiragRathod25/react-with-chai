import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function githubUserDetails() {
  const data=useLoaderData()
  // const [data, setData] = useState({});
  // fetch(`https://api.github.com/users/chiragrathod25`)
  //   .then((res) => res.json())
  //   .then((res) => setData(res));

    return (
    <>
    <div className="flex flex-col items-center m-5">

      <h2 className="bg-gray-500 text-center text-white text-3xl p-5 rounded-xl m-5">
        Username:{data.login}
      </h2>
      <img src={data.avatar_url} width={200} className="rounded-lg" alt="github summery"  />
    </div>
    </>
  );
}
export { githubUserDetails };

export default function getGithubUserInfo(){
  const response=fetch(`https://api.github.com/users/chiragrathod25`)
  .then((res) => res.json())
  return response
}
