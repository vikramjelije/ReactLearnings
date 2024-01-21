function ProfileCard(props) {
  const { title, handle, image, description } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Pda logo" width="1280px" height="960px"/>
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
