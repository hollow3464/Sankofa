import { Form, FormGroup } from "react-bootstrap";
import "./profileCreate.css";
import { useState } from "react";
import AvatarPicker from "../../Components/AvatarPicker/AvatarPicker";

function ProfileCreate() {
  const [openModal, setOpenModal] = useState(false);
  const [chosseIcon, setChosseIcon] = useState('+')
  const avatarPicker = () => {
    setOpenModal(!openModal);
  }; 
  return (
    <>
      <div className="container-perfil">
        <img
          src="/assets/images/logo_login.png"
          alt="Logo"
          className="logo-perfil"
        />
        <div className="avatar-picker">
          <button className="btn-perfil" onClick={avatarPicker}>
            {chosseIcon}
          </button>
          <h3>Luisa Torres</h3>
          <h5>Queremos conocerte un poco más</h5>
        </div>
        <Form className="form-perfil">
          <FormGroup>
            <p>¿Cómo prefieres qué te llamemos?</p>
            <input type="text" placeholder="" className="input-filled" required/>
          </FormGroup>
          <p>Fecha de nacimiento:</p>
          <div className="row-perfil">
            <input type="number" className="input-filled fecha" placeholder="Mes" required/>
            <input type="number" className="input-filled fecha" placeholder="Día" required/>
            <input type="number" className="input-filled fecha" placeholder="Año" required/>
          </div>
          <div className="row-perfil">
          <FormGroup>
            <p>¿Tienes alguna alergia?</p>
            <input type="text" placeholder="" className="input-filled" style={{width:'100%', height: '50%'}} required />
          </FormGroup>
          <FormGroup>
            <p>¿Eres vegetariano(a)?</p>
            <select className="select-filled" required>
              <option selected></option>
              <option value="1">Si</option>
              <option value="2">No</option>
            </select>
          </FormGroup>
          </div>
          <br />
          <button type="submit" className="btn-filled">Completar</button>
        </Form>
        <div style={{display: "flex", flexDirection: "column"}}>
          <img
            src="/assets/images/building2.png"
            alt="build"
            className="building-perfil"
          />
          <img 
            src="/assets/images/group.png"
            className="group-perfil"
          />
          <img
            src="/assets/images/paper.png"
            alt="paper"
            className="paper-perfil"
          />
        </div>
      </div>
      <AvatarPicker chosseIcon={setChosseIcon} visible={openModal} funtionVisible={setOpenModal}/>
    </>
  );
}

export default ProfileCreate;
