function Cases(render){
    console.log(render)
    return(
        <span>
        Cases:
      <p>New: {render.new?render.new:'0'}</p>
      <p>Active: {render.active?render.active:'0'}</p>
      <p>Critical: {render.critical?render.critical:'0'}</p>
      <p>Recovered: {render.recovered?render.recovered:'0'}</p>
      <p>Total: {render.total?render.total:'0'}</p>
    </span>
    )
}
export default Cases