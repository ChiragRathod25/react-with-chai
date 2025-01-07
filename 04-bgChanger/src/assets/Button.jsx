function Button(props){
    
    return (
        <>
            <button className="px-5 py-2 rounded-xl text-white font-medium " style={{backgroundColor:props.color}} onClick={props.onClick}>{props.color}</button>
        </>
    )
}
export default Button