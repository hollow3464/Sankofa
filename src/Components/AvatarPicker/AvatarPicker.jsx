import "./avatarPicker.css";

function AvatarPicker({chosseIcon, funtionVisible, visible}) {

  return (
    <>
      <div className = {`white-screen ${visible ? 'visible' : 'notVisible'}`}></div>
        <div className={`container-menu ${visible ? 'visible' : 'notVisible'}`}>
        <div className="title-avatarPicker">
          <h6>Cambia tu avatar</h6>
        </div>
          <div className="avatarPicker-menu">
            <p onClick={() => chosseIcon('👩🏾‍💻')} className="item">👩🏾‍💻</p>
            <p onClick={() => chosseIcon('💁🏽‍♀️')} className="item">💁🏽‍♀️</p>
            <p onClick={() => chosseIcon('👩🏾‍🍳')} className="item">👩🏾‍🍳</p>
            <p onClick={() => chosseIcon('👩🏾‍🔬')} className="item">👩🏾‍🔬</p>
            <p onClick={() => chosseIcon('🙋🏾‍♀️')} className="item">🙋🏾‍♀️</p>
            <p onClick={() => chosseIcon('👩🏿‍🎓')} className="item">👩🏿‍🎓</p>
            <p onClick={() => chosseIcon('🕵🏾‍♀️')} className="item">🕵🏾‍♀️</p>
            <p onClick={() => chosseIcon('👩🏽‍🏫')} className="item">👩🏽‍🏫</p>
            <p onClick={() => chosseIcon('👩🏾‍💼')} className="item">👩🏾‍💼</p>
          </div>
          <button onClick={() => funtionVisible(false)} className="btn-filled">Listo</button>
        </div>
    </>
  );
}

export default AvatarPicker;
