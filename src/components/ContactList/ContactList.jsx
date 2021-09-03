export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      // name === name ? (console.log(`${name} is already in contacts.`))
      <li key={id}>
        <span className="ContactList__text">{name} </span>
        <span className="ContactList__text">{number}</span>
        {/* <button
          type="button"
          className="ContactList__btn"
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button> */}
      </li>
    ))}
  </ul>
)