import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'
import { toast } from 'react-toastify';

export default function UploadForm({ isOpen, setIsOpen }) {  

  const fileRef = useRef(null)
  const [prevFile, setPrevFile] = useState(null)  
  function closeModal() {
    setIsOpen(false)
    fileRef.current.value = ''
    setPrevFile(null)
  }


  const previewFile = (e) => {
    const file = fileRef.current.files[0]    
    const reader = new FileReader()
    reader.addEventListener('load', () => {            
      const prevImg = document.createElement('img')
      prevImg.src = reader.result
      setPrevFile(prevImg)
    })

    reader.readAsDataURL(file)    
    // prev url file
    
  }
  
  const handledFile = (e) => {
    e.preventDefault()
    const file = e.target.file.files[0]    
    var formdata = new FormData();
    formdata.append("formdata", file);

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://localhost:4000/api/v1/upload", requestOptions)
    .then(response => response.text())
    .then(result =>{
      console.log('result', result)
      toast.success('Archivo subido con exito')
      closeModal()
    })
    .catch(error => console.log('error', error));
  }

  return (
    <>      
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Subir archivo
                  </Dialog.Title>
                  <form className='flex items-center  flex-col gap-3' onSubmit={handledFile}>
                    <label htmlFor="file" className='text-blue-900' id="file_label">Selecciona un archivo</label>
                    <input type="file" name="file" id="file" className="mt-4" ref={fileRef} onChange={previewFile} />
                    <picture>
                      {prevFile && prevFile !== null && <img className='preview' src={prevFile.src} alt="preview" />}
                    </picture>
                    {
                      prevFile && (
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >Upload file</button>
                      )
                    }
                  </form>                                      
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
