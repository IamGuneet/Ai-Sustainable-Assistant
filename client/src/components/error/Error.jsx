import "./error.css"

export default function Error() {
  return (
    <div className="error-container p-3">
     <h1 className="display-3">Error 404</h1>
     <p> Page not found </p>
     <div className="d-flex">
     <a href="/" className="btn btn-primary m-1">Home</a>
     <a href="/login" className="btn btn-primary m-1">Sign In</a>
     </div>
    </div>
  )
}
