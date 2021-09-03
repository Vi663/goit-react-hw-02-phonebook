export const FriendListItem = ({
  avatar,
  name,
  isOnline,
}) => {
  return (
    <li className={s.item}>
      <span className={s.status}>
      {isOnline && <div className={s.greenLabel}></div>}
      {!isOnline && <div className={s.redLabel}></div>}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  )
}