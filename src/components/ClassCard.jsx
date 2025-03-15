import '../assets/css/fontawesome-all.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function ClassCard (props){
  return (
    <div className={`grid grid-cols-[20%_80%] gap-2 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)] pb-6 md:mr-8 md:ml-8 max-w-[40rem]`}>
        <div className="col-1 col-span-all justify-items-center">
            
            <div className='flex bg-slate-700 text-white btn-circle place-content-center items-center'>
                <FontAwesomeIcon icon={props.icon} className='text-xl' spin/>
            </div>
        </div>
        <div className="col-2">
            <div className='text-xl font-bold' >{props.classname}</div>
            <div className='text-lg'>{props.ages}</div>
            <div className='text-sm mt-6' style={{ whiteSpace : 'pre-line'}}>
                {props.description}
            </div>
        </div>

    </div>
  )
}


export default ClassCard;