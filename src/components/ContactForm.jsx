import { Button,Textarea,Input } from 'react-daisyui';
import { faEnvelope, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function ContactForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    
    const URL = "";
    
    const DATA = new URLSearchParams(new FormData(event.target));

    let response = fetch(URL, {
        redirect: "follow",
        method: "POST",
        body: DATA
    });

    event.target.reset();

    document.getElementById('submit-modal').showModal();

  }

  const preventSpecialChars = (event) => {
    if (event.key === ' ' || event.key === ',' || event.key === ';') {
        event.preventDefault();
    }
}

  return (
    <div className="bg-[#282b34] border-black rounded-lg justify-items-center">

      <h2 className="text-lg font-bold mb-4 text-gray-400">Contact Request Form</h2>

      <form onSubmit={handleSubmit} id="requstContactForm" className="space-y-4">
        <div className='flex flex-col gap-2'>
            <div>
                <Input id="name" name="Name" maxlength="75" required className="mt-1 block w-full border rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500" placeholder='Name'/>
            </div>
            <div className='flex flex-row space-x-4'>
                    <div>
                        <Input id="email" 
                               name="Email" 
                               maxlength="150"  
                               required 
                               className="mt-1 block w-full border rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500" 
                               placeholder='Email'
                               onKeyDown={preventSpecialChars}/>
                    </div>
                    <div>
                        <Input id="phone" name="Phone" maxlength="11" className="mt-1 block w-full border rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500" placeholder='Phone Number'/>
                    </div>
            </div>
            <div>
                <Textarea id="message" name="Message" maxlength="250" rows="4" required className="mt-1 block w-full border rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500" placeholder='Drop us a message'></Textarea>
            </div>
            
        </div>
        <Button className="bg-[#540FA3] text-white px-4 py-2 mr-4 rounded hover:bg-blue-600" animation="True">
            <FontAwesomeIcon icon={faEnvelope} className='text-lg' spin/>
            Submit
        </Button>
        <Button type="reset" className="bg-[#540FA3] text-white px-4 py-2 rounded hover:bg-blue-600" animation="True">
            <FontAwesomeIcon icon={faRefresh} className='text-lg' spin/>
            Reset
        </Button>
      </form>

      <dialog id="submit-modal" className="modal">

        <div className="modal-box relative justify-items-center">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className='flex flex-col items-center'>
                <h2 className="text-lg font-bold mb-4 text-gray-400">Thanks for reaching out!</h2>
                <p color="#ffffff">We will get back to you as soon as possible</p>
			    
               
            </div>

            
        </div>

      </dialog>
    </div>
  );
};

export default ContactForm;
