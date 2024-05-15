import ImgProfile from '../../assets/img/profile-img.jpg'

export function Profile() {
  return (
    <div className="content">
      <div className="content__header">
        <img src={ImgProfile} alt="" />
      </div>
      <div className="content__avatar-info">Avatar + info</div>
      <div className="content__my-posts">
        <h3 className="my-posts__title">My posts</h3>
        <form className="my-posts__create">
          <input type="text" />
          <button type="submit">Send</button>
        </form>
        <div className="my-posts__posts">
          <div className="my-posts__post">post 1</div>
          <div className="my-posts__post">post 2</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vitae omnis sunt vel
          facilis tempore natus enim perferendis inventore, incidunt beatae ad! Eveniet doloribus
          neque nulla ipsa obcaecati. Ipsam, nobis!
        </div>
      </div>
    </div>
  )
}
