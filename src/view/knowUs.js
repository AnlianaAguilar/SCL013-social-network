export const knowUs = () => {
    const divknowUs = document.createElement('div');
    const viewknowUs = `
    <div id="content">
      <div id="conocenos">
        <div id="mision"  class="caja-conocenos">
          <img src="img/En-que-consiste-el-trueque-2.png">
          <h1>Misión</h1>
          <p>Consiste en intercambiar sin el uso de dinero, productos y servicios basado en la satisfacción 
            de necesidadesque en la busqueda del lucro personal.</p>
        </div>

        <div id="vision" class="caja-conocenos">
          <img src="img/trueke 4.jpg">
          <h1>Visión</h1>
          <p>Resolver las propias necesidades mediante el intercambio de trabajos particulares o productos</p>
        </div>

        <div id="valores" class="caja-conocenos">
          <img src="img/valores.jpg">
          <h1>Valores</h1>
          <p>Fomentar la solidaridad, el apoyo entre la comunidad, la ayuda entre personas y pensar en los más 
            necesitados, creando una sociedad más empática y colaborativa</p>
        </div>

      </div>
    </div>
`
divknowUs.innerHTML = viewknowUs;
return divknowUs

}