import './SplashPage.css'

export default function SplashPage() {
  return (
    <div className="splash-container">
      <div className="splash-text-container">
        <h2 className="header1">Find your inspiration.</h2>
        <h5 className="one-liner">A click is a forever thing</h5>
      </div>
      <footer className='network-links'>
        <div>Sornam Vairavan</div>
        <a href="https://www.linkedin.com/in/sornamvairavan" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="https://github.com/sornamvairavan" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-lg"></i>
        </a>
      </footer>
    </div>
  )
}