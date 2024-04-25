import popupvideo from '../videos/pop-up-video.mp4'

function Modal({setshow}) {

    return (
        <div className={`pop-up-modal body `}>
            <button onClick={() => setshow(false)} className='-mt-32'><i className="bi bi-x-circle-fill text-5xl py-2"></i></button>
            <video src={popupvideo} autoPlay loop muted ></video>
        </div>
    )
}

export default Modal