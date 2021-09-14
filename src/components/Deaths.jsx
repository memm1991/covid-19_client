function Deaths(render){
    console.log(render)
    return(
        <span>
        Deaths:
      <p>New: {render.new?render.new:'0'}</p>
      <p>Total: {render.total?render.total:'0'}</p>
    </span>
    )
}
export default Deaths
      