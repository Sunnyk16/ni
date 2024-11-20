"use client"

const error = () => {
    function reset():void{
        window.location.reload();
    }
  return (
    <div>
        <h1>something went wrong.. </h1>
        <button onClick={reset}>try again</button>
      
    </div>
  )
}

export default error
