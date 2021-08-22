import { Col } from "react-bootstrap";

export default function ProfileSections({ selected, user }) {
  console.log(user);
  return (
    <div className="profile-sections">
      {selected === "info-0" ? (
        <Col xs={12} className="profile-sections__info-0 mt-3">
          <h4 className="profile-sections__info-0__data">
            <span>Nome:</span> {user.firstName}
          </h4>
          <h4 className="profile-sections__info-0__data">
            <span>Cognome:</span> {user.lastName}
          </h4>
          <h4 className="profile-sections__info-0__data">
            <span>Numero di Telefono:</span> {user.cellNumber}
          </h4>
          <h4 className="profile-sections__info-0__data">
            <span>Data Creazione:</span>
            {user.profile.createdAt}
          </h4>
          <h4 className="profile-sections__info-0__data">
            <span>E-mail:</span>
            {user.profile.email}
          </h4>
        </Col>
      ) : selected === "info-1" ? (
        <Col xs={12} className="profile-sections__info-1">
          info-1
        </Col>
      ) : (
        <Col xs={12} className="profile-sections__info-2">
          info-2
        </Col>
      )}
    </div>
  );
}
