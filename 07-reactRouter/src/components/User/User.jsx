import { useParams } from "react-router-dom"

function User(){
    const {username}=useParams()
    return (
        <>
            <h1 className="bg-gray-500 text-center text-white text-3xl p-5 rounded-xl m-5">User: {username}</h1>
        </>
    )
}
export default User