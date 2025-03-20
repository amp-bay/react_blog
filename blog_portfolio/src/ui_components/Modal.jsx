
const Modal = ({children,toggleShowModal}) => {

  function handleToggleModal(e){
    if (e.target.id === "modal"){
      toggleShowModal()
      
    }

  }
  
  return (
    <div id="modal" onClick={handleToggleModal} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center z-50 h-s">
      {children}
    </div>
  )
}

export default Modal