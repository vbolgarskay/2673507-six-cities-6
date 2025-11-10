import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div
          className="container"
          style={{ textAlign: 'center', padding: '100px 20px' }}
        >
          <h1 style={{ fontSize: '72px', marginBottom: '20px' }}>404</h1>
          <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Not Found</h2>
          <p style={{ fontSize: '18px', marginBottom: '40px' }}>
            The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="button"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              textDecoration: 'none',
            }}
          >
            Go to main page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
