import ShadowBackground from '../assets/css/images/shadow.png'

function TitleTab(props){

    return (
        <div className={`absolute 
                        -top-8 
                        right-1/2 
                        translate-x-1/2 
                        ${props.bgcolor}
                        py-5
                        px-[10%]
                        justify-items-center
                        shadow-[-5px_-9px_10px_-2px_rgba(0,0,0,0.3),_5px_-9px_10px_-2px_rgba(0,0,0,0.3)]`}>

        
            <div className={`${props.textcolor} font-bold tracking-widest text-sm uppercase text-nowrap`}>{props.title}</div>
            

        </div>

    )

}

export default TitleTab;