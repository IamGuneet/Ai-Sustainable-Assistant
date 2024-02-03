import "./ss.css"

export default function SignSuccess() {
    return (
      <div>
        <div className="container d-flex flex-column justify-content-center align-items-center p-3">
       <h1 className="display-3">Welcome</h1>
       <div className="container d-flex justify-content-center ">
       <ul>
       <li>
      <a href="/logged/calculator" className="btn btn-primary m-1 a" >Emission Calculator</a>
       </li>
       <li>
      <a href="/logged/ai" className="btn btn-primary m-1 a">हरितदीपः AI Assistant</a>
       </li>
       <li>
      <a href="/logged/kwh" className="btn btn-primary m-1 a">Kwh Efficiency </a>
       </li>
       <li>
      <a href="/logged/history" className="btn btn-primary m-1 a">History </a>
       </li>
       <li>
      <a href="/logged/EStore" className="btn btn-primary m-1 a">Thrift Store </a>
       </li>
       <li>
      <a href="/" className="btn btn-success m-1 a">Log Out </a>
       </li>
       </ul>
       </div>
      </div>
      </div>
    )
  }
  