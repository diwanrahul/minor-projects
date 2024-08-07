/* eslint-disable react/prop-types */
export default function Modal({ id, header, body, footer, setShowModalPopup, showModalPopup}) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
            <span
            onClick={()=>setShowModalPopup(!showModalPopup)}
            className="close-modal-icon cursor-pointer ">&times;</span>
            <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
            {
                body ? (body) : (
                    <div>
                        <p>This is our Modal Body</p>
                    </div>
                )
            }
        </div>
        <div className="footer">
            {
                footer ? (footer) : (
                    <div>
                        <p>This is our footer</p>
                    </div>
                )
            }
        </div>
      </div>
    </div>
  );
}
