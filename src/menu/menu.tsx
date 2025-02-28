import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search lessons"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New Lesson</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/use-effect-lesson'}>Lesson I</Link >
            </li>
            <li>
              <a href={`/contacts/2`}>Lesson II</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
