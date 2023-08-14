export default function Input(props){
    return(
        <input className={`
            min-w-full 
            bg-gray-100 
            
            rounded
            border-none
            ${props.className}  
        `} 
        type={props.type}
        placeholder={`${props.placeholder}
        `}
        value={props.value}
        name={props.name}
        id={props.id}
        />
    )
}