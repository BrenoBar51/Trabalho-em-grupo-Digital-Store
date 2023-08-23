export default function Input(props){
    return(
        <div className="">
            <input className={`
                min-w-full 
                bg-gray-100 
                font-normal
                rounded-md
                border-none
                h-[60px]
                relative
                pl-3
                ${props.className}
            `} 
            type={`${props.type}`}
            placeholder={`      ${props.placeholder}`}
            value={props.value}
            name={props.name}
            id={props.id}
            />
        </div>
    )
}