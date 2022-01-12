import './PageNotFound.css'

export default function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <img src={"/images/c.png"} alt="logo" className='pnf-logo'></img>
      <h2 className='pnf'>Page Not Found</h2>
    </div>
  )
}