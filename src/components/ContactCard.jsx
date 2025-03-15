import '../assets/css/fontawesome-all.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function ContactCard (props){
  return (
    <div className={`grid grid-cols-[20%_60%] gap-2  mt-8 pb-8 md:pb-8 md:mt-4 md:ml-[15%] lg:ml-0`}>
        <div className="col-1 col-span-all justify-items-center">
            
            <div className='flex bg-slate-700 text-white btn-circle btn-sm place-content-center items-center'>
                <FontAwesomeIcon icon={props.icon} className='text-lg' spin/>
            </div>
        </div>
        <div className="col-2">
            <div className='text-md font-bold' >{props.title}</div>
            <div className='text-sm'>{props.info}</div>
            <div className='text-sm mt-2' style={{ whiteSpace : 'pre-line'}}>
                {props.description}
            </div>
            <div><a href={props.link}>{props.linkDesc}</a></div>
        </div>

    </div>
  )
}


export default ContactCard;