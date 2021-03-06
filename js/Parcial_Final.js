
//const yearActual = new Date().getFullYear();

const _id = 'getElementById';
const _cr = 'createElement';
const _qs = 'querySelector';


let d = document,
aProductos = [
    {
        id: 0,
        catgria: 1,
        NombreVer: 'Tabla de snowboard Nitro',
        Nombre: 'Tabla de snowboard',
        Precio: 95000,
        Descripción: 'La Process es una verdadera institución, una tabla freestyle lúdica, con rendimiento y polivalente, aclamada e incluso utilizada por los riders de snowboarders de alto nivel tal como Mark McMorris. Desde las grandes tablas del snowpark hasta la nieve recién pisada, pasando por los bordes de pista, la Burton Process te acompañará en todas tus sesiones.',
        Imagen: {
            src: 'items/0001-tablas.png',
            alt: 'Tabla Snowboard ',
        },
        ImagenA: {
            src: 'items/0002-tablas.png',
            alt: 'Tabla Snowboard ',
        },
        ImagenB: {
            src: 'items/0003-tablas.png',
            alt: 'Tabla Snowboard ',
        },
        ImagenC: {
            src: 'items/0004-tablas.png',
            alt: 'Tabla Snowboard ',
        },
        ImagenD: {
            src: 'items/0005-tablas.png',
            alt: 'Tabla Snowboard ',
        },
        Colores: 'Negro, Violeta ',
        Condicion: 'Nuevo  |  235 Vendidos  |  69 opiniones',
    },
    {
        id: 1,
        catgria: 1,
        NombreVer: 'Bota de snowboard Burton',
        Nombre: 'Bota de snowboard',
        Precio: 45000,
        Descripción: 'La bota de snowboard Photon Step On BOA® para hombre ofrece el más alto nivel de rendimiento con la capacidad de microajuste rápido del BOA® Fit System con tecnología Coiler ™. Incluye la configuración Sequence ™ de Boa para un ajuste uniforme y una sujeción segura del talón con solo girar un dial. ',
        Imagen: {
            src: 'items/0001_botas.png',
            alt: 'Tabla Snowboard allMontan 162',
        },
        ImagenA: {
            src: 'items/0002_botas.png',
            alt: 'Guantes Snowboard',
        },
        ImagenB: {
            src: 'items/0003_botas.png',
            alt: 'Guantes Snowboard',
        },
        ImagenC: {
            src: 'items/0004_botas.png',
            alt: 'Guantes Snowboard',
        },
        ImagenD: {
            src: 'items/0005_botas.png',
            alt: 'Guantes Snowboard',
        },
        Colores: [
            'negro',
            'rojo',
            'azul',
            
        ],
        Condicion:  'Nuevo  |  123 Vendidos  |  34 opiniones', 
    },
    {
        id: 2,
        catgria: 2,
        NombreVer: 'Pantalon Impermeable',
        Nombre: 'Pantalon de ski',
        Precio: 35000,
        Descripción: 'Transpirables para una sensación fresca y un rendimiento resistente. Disponible con o sin aislamiento, el pantalón Covert incluye todas las necesidades, como ventilación Test-I-Cool completa de rodilla a rodilla, costuras impermeables totalmente selladas y un bolsillo de carga apto para telesillas con escondite interno.',
        Imagen: {
            src: 'items/0001_pantalones.png',
            alt: 'Tabla Snowboard allMontan 162',
        },
        ImagenA: {
            src: 'items/0002_pantalones.png',
            alt: 'Guantes Snowboard',
        },
        ImagenB: {
            src: 'items/0003_pantalones.png',
            alt: 'Guantes Snowboard',
        },
        ImagenC: {
            src: 'items/0004_pantalones.png',
            alt: 'Guantes Snowboard',
        },
        ImagenD: {
            src: 'items/0005_pantalones.png',
            alt: 'Guantes Snowboard',
        },
        Colores: [
            'negro',
            'rojo',
            'azul',
        ],
        Condicion: 'Nuevo  |  176 Vendidos  |  56 opiniones', 
    },
    {
        id: 3,
        catgria: 2,
        NombreVer: 'Casco Snowboard Anon',
        Nombre: 'Casco Snowboard',
        Precio: 22000,
        Descripción: 'El casco Anon Prime MIPS® ofrece un diseño de carcasa híbrida que combina la durabilidad de la carcasa rígida con la sensación ligera de la construcción en molde para un casco que es increíblemente ligero y resistente. El sistema de ajuste 360 ​​° BOA® ofrece un ajuste rápido y microajustable con solo girar un dial',
        Imagen: {
            src: 'items/0001_casco.png',
            alt: 'Tabla Snowboard allMontan 162',
        },
        ImagenA: {
            src: 'items/0002_casco.png',
            alt: 'Guantes Snowboard',
        },
        ImagenB: {
            src: 'items/0003_casco.png',
            alt: 'Guantes Snowboard',
        },
        ImagenC: {
            src: 'items/0004_casco.png',
            alt: 'Guantes Snowboard',
        },
        ImagenD: {
            src: 'items/0005_casco.png',
            alt: 'Guantes Snowboard',
        },
        Colores: [
            'negro',
            'rojo',
            'azul',
        ],
        Condicion:  'Nuevo  |  120 Vendidos  |  45 opiniones', 
    },
    {
        id: 4,
        catgria: 2,
        NombreVer: 'Guantes Termicos ski',
        Nombre: 'Guantes de Ski',
        Precio: 6000,
        Descripción: 'La vida de un guante no es fácil. Más que cualquier otra parte de su equipo de conducción, los guantes tienen el mayor contacto con los elementos. Con eso en mente, los ciclistas profesionales eligen la tecnología Burton GORE-TEX Glove + Gore Warm para hombre. ',
        Imagen: {
            src: 'items/0001_guantes.png',
            alt: 'Tabla Snowboard allMontan 162',
        },
        ImagenA: {
            src: 'items/0002_guantes.png',
            alt: 'Guantes Snowboard',
        },
        ImagenB: {
            src: 'items/0003_guantes.png',
            alt: 'Guantes Snowboard',
        },
        ImagenC: {
            src: 'items/0004_guantes.png',
            alt: 'Guantes Snowboard',
        },
        ImagenD: {
            src: 'items/0005_guantes.png',
            alt: 'Guantes Snowboard',
        },
        Colores: [
            'negro',
            'rojo',
            'azul',
        ],
        Condicion:  'Nuevo  |  435 Vendidos  |  90 opiniones', 
    },
    {
        id: 5,
        catgria: 1,
        NombreVer: 'Campera Snowboard Burton Covert',
        Nombre: 'Campera Snowboard',
        Precio: 52000,
        Descripción: 'Acelere su conducción hacia los límites exteriores de la montaña con la sensación y el rendimiento premium de la chaqueta Burton Covert para hombre. Haciendo todo lo posible para ayudar al planeta, su aislamiento THERMOLITE® está reciclado en un 40 por ciento, y toda la chaqueta está aprobada por bluesign®, para aliviar el impacto tanto en las personas como en el planeta. ',
        Imagen: {
            src: 'items/0001_camperas.png',
            alt: 'Tabla Snowboard allMontan 162',
        },
        ImagenA: {
            src: 'items/0002_camperas.png',
            alt: 'Guantes Snowboard',
        },
        ImagenB: {
            src: 'items/0003_camperas.png',
            alt: 'Guantes Snowboard',
        },
        ImagenC: {
            src: 'items/0004_camperas.png',
            alt: 'Guantes Snowboard',
        },
        ImagenD: {
            src: 'items/0005_camperas.png',
            alt: 'Guantes Snowboard',
        },
        Colores: [
            'Negros',
        ],
        Condicion:  'Nuevo  |  65 Vendidos  |  20 opiniones', 
    }
];

let aPrecioTotal = {
    total: 0,
};
let section, div, divCate2, dato, span, divProducto, divDescripcionProducto, nuevodivCarrito, inputNombre,
    texto, img, h2, h3, h4, p, p2, btnComprarProducto, btnVerProducto, btn3, btn4, btn5, btn6, cont = 1, acum = 0, itemsCarrito,
    itemsCarrito2, prod, pnuevo, verCarrito, button, buttonEnviarPago, divFormulario, divBotonesCarrito, errorIngreso = 0, msj = '';
let h3span, divRemovido, divRemueve;
let spanPrecio, spanH3;
let pass = '';
let cant;
let divBotones;
let divValores;
let parrafoTotalItems;
let spanTotal; 
let valor;
let contProductos = 0;
let aCantidades = [];
let aProdAgregados = [];
let aCarrito = [];
let ids;
let imgPricpal; 
let imgPricpalA;
let imgPricpalB;
let imgParaMin; 
let imgParaMinNext; 
let aImg = [];
// me ubico sobre los items 
itemsCarrito = d[_qs]('header h1~div > p ');
itemsCarrito2 = d[_qs]('header h1~div > p~p > span');
verCarrito = d[_qs]('header h1~div > p~p~button ');
spanTotal = d[_id]('valorTotal');
let btonMenu2 = d[_id]('btonMenu');
btonMenu2.onclick = AmpliarHombres;
let btonMenuMujer = d[_id]('btonMenuMujer');
btonMenuMujer.onclick = AmpliarMujeres;


section = d[_qs]('section');

// creo el div para los productos

div = d[_cr]('div');
div.id = 'productos';
section.appendChild(div);

msj = d[_cr]('p');
msj.className = 'mensajeAviso';

let TimerInicio = setTimeout (timerInicio, 500);

function timerInicio() {
    let div = d[_cr]('div');
    div.className = 'modalTimer';
    div.id = 'ventanaTimer';

    let divImagenBanner = d[_cr]('div');
    divImagenBanner.className = 'divImagenBanner';
    let imagenBanner = d[_cr]('img');
    imagenBanner.className = 'imagenBanner';
    imagenBanner.src = 'items/bannerInicio.png';
    imagenBanner.alt = 'Banner publicidad marca';
    divImagenBanner.appendChild(imagenBanner);
    let TituloBanner = d[_cr]('h2');
    TituloBanner.className = 'TituloBanner';
    TituloBanner.innerHTML = 'Bienvenidos';
    divImagenBanner.appendChild(TituloBanner);
  
    div.appendChild(divImagenBanner);
    let a = d.createElement('a');
    a.href = '#';
    a.innerHTML = 'X';
    a.onclick = function () {
        d.body.removeChild(d[_id]('ventanaTimer'));
        clearTimeout(TimerInicio);
        return false;
    }
    d.body.appendChild(div);
    div.appendChild(a);
}
let cierreBanner = setTimeout(cierreBa, 2000);
function cierreBa () {
    d.body.removeChild(d[_id]('ventanaTimer'));
    clearTimeout(TimerInicio);
}

// creo los productos dinamicamente

for (let i = 0; i < aProductos.length; i++) {
    
    divProducto = d[_cr]('div');
    divProducto.className = 'divProductos';
    divProducto.id = 'divProductos';
    div.appendChild(divProducto);
    
    pnuevo = d[_cr]('p');
    pnuevo.className = 'categoria';
    pnuevo.innerHTML = aProductos[i].Condicion;
    divProducto.appendChild(pnuevo);

    img = d[_cr]('img');
    img.src = aProductos[i].Imagen.src;
    img.alt = aProductos[i].Imagen.alt;
    divProducto.appendChild(img);

    divDescripcionProducto = d[_cr]('div');
    divProducto.appendChild(divDescripcionProducto);
    divDescripcionProducto.className = 'descripcionProducto';
    h3 = d[_cr]('h3');
    h3.innerHTML = aProductos[i].Nombre;
    divDescripcionProducto.appendChild(h3);

    p = d[_cr]('p');
    p.innerHTML = ' Precio: $';
    span = d[_cr]('span');
    span.style.paddingLeft = '0.5em';
    span.innerHTML = aProductos[i].Precio;
    divDescripcionProducto.appendChild(p);
    p.appendChild(span);

    btnVerProducto = d[_cr]('p');
    btnVerProducto.innerHTML = 'visibility';
    btnVerProducto.className ='material-icons';
    divDescripcionProducto.appendChild(btnVerProducto);

    btnComprarProducto = d[_cr]('button');
    btnComprarProducto.innerHTML = 'Comprar';
    btnComprarProducto.className = 'btnComprarProducto';
    btnComprarProducto.dataset.precio = aProductos[i].Precio;
    btnComprarProducto.dataset.id = aProductos[i].id;
    btnComprarProducto.dataset.nombre = aProductos[i].Nombre;
    divDescripcionProducto.appendChild(btnComprarProducto);
    btnVerProducto.onclick = function () {
        div = d[_cr]('div');
        div.className = 'modal';
        div.id = 'modalDescripcion';

        let divVerProducto = d[_cr]('div');
        divVerProducto.className = 'divVerProducto';
        divVerProducto.id = 'galeria';

        imgPricpal = d[_cr]('img');
        imgPricpal.src = aProductos[i].Imagen.src;
        imgPricpal.alt = 'queen foto disco';
        imgPricpal.id = 'foto';
        divVerProducto.appendChild(imgPricpal)
        
        let divParaMin = d[_cr]('div');
        divParaMin.className = 'divParaMin';
        divVerProducto.appendChild(divParaMin);
        
        let divParaFotoMin = d[_cr]('div');
        divParaFotoMin.className = 'divParaFotoMin';
        divParaMin.appendChild(divParaFotoMin);
        
        imgPricpalA = d[_cr]('img');
        imgPricpalA.src = aProductos[i].Imagen.src;
        imgPricpalA.alt = 'queen foto disco';
        imgPricpalA.style.cursor = 'pointer';
        imgPricpalA.onclick = cambiarImagen;
        divParaFotoMin.appendChild(imgPricpalA);

        imgPricpalB = d[_cr]('img');
        imgPricpalB.src = aProductos[i].ImagenA.src;
        imgPricpalB.alt = 'queen foto disco';
        imgPricpalB.style.cursor = 'pointer';
        imgPricpalB.onclick = cambiarImagen;
        divParaFotoMin.appendChild(imgPricpalB);

        let imgMinPrimera = d[_cr]('img');
        imgMinPrimera.src = aProductos[i].ImagenB.src;
        imgMinPrimera.alt = 'Miniatura#1';
        imgMinPrimera.style.cursor = 'pointer';
        imgMinPrimera.onclick = cambiarImagen;
        aImg.push(aProductos[i].Imagen.src);
        divParaFotoMin.appendChild(imgMinPrimera);
        let imgMinSegunda = d[_cr]('img');
        imgMinSegunda.src = aProductos[i].ImagenC.src;
        imgMinSegunda.alt = 'Miniatura#2';
        imgMinSegunda.style.cursor = 'pointer';
        imgMinSegunda.onclick = cambiarImagen;
        aImg.push(aProductos[i].ImagenA.src);
        divParaFotoMin.appendChild(imgMinSegunda);
        let imgMinTercera = d[_cr]('img');
        imgMinTercera.src = aProductos[i].ImagenD.src;
        imgMinTercera.alt = 'Miniatura#3';
        imgMinTercera.style.cursor = 'pointer';
        imgMinTercera.onclick = cambiarImagen;
        aImg.push(aProductos[i].ImagenB.src);
        divParaFotoMin.appendChild(imgMinTercera);
        
        function cambiarImagen() {
        
            imgPricpal.src = this.src;
        }
        
        let divContenerInfo = d[_cr]('div');
        divContenerInfo.className = 'divContenerInfo';
        divVerProducto.appendChild(divContenerInfo);
        let h3Ver = d[_cr]('h3');
        h3Ver.innerHTML = aProductos[i].NombreVer;
        h3Ver.className = 'h3Ver';
        let parrafoDescripcion = d[_cr]('p');
        parrafoDescripcion.innerHTML = aProductos[i].Descripción;
        let h4Ver = d[_cr]('h4');
        h4Ver.innerHTML = 'Precio: $' + aProductos[i].Precio;
        h4Ver.className = 'h4Ver';
        divContenerInfo.appendChild(h3Ver);
        divContenerInfo.appendChild(parrafoDescripcion);
        divContenerInfo.appendChild(h4Ver);
        div.appendChild(divVerProducto);

        let a = d[_cr]('a');
        a.href = '#';
        a.innerHTML = 'X';
        a.onclick = function () {
            //aImg = [];
            d.body.removeChild(d[_id]('modalDescripcion'));
            return false;
        }
        
        d.body.appendChild(div)
        div.appendChild(a);
        
    }
    // btn seleccion del producto
    btnComprarProducto.onclick = function () {
        ids = parseInt(this.dataset.id);
        console.log(`indice ingresado ${ids}`);

        valor = this.previousElementSibling.previousElementSibling.lastChild.textContent;
            
        acum += parseInt(valor);
       
        cant = d[_qs]('header h1~div > p ');
        cant.innerHTML = parseInt(cont++);
        let precioCarrito = parseInt(this.dataset.precio);
        aPrecioTotal.total = parseInt(aPrecioTotal.total) + precioCarrito;
       
        spanTotal.innerHTML = aPrecioTotal.total;
        aCarrito.push(aProductos[i]);
        aProdAgregados.push(aProductos[i].id);
        aCantidades.push(contProductos);
        contProductos++;
        
        this.style.color = 'green';
    }
    
}
// funcion ver producto
var divCarrito = d[_qs]('.carrito > button');
divCarrito.addEventListener("click", Ampliar);

function Ampliar() {
    // modal Ver Producto
    console.log(aCarrito);
    let div = d[_cr]('div');
    div.className = 'modal';
    div.id = 'modalProducto';
    let div2 = d[_cr]('div');
    div2.className = 'div2';
    div2.id = 'div2';
    div.appendChild(div2);
    if (valor == '' || !valor) {
        aCarrito = [];
        let tex = d[_cr]('p');
        tex.className = 'texCarritoVacio';
        tex.innerHTML = 'Tu carrito está vacío';
        let texPre = d[_cr]('p');
        texPre.className = 'texCarritoVacioA';
        texPre.innerHTML = '¿No sabés qué comprar? ¡Miles de productos te esperan!';
        div2.appendChild(tex);
        div2.appendChild(texPre);
       
    } else {  
        let tituloCarrito = d[_cr]('h3');
        tituloCarrito.innerHTML = 'Mi Carrito ';
        tituloCarrito.id = 'carrito';
        tituloCarrito.className = 'carrito';
        div2.appendChild(tituloCarrito);
        
        for (let i = 0; i < aCarrito.length; i++) {
            
            let divCarrito = d[_cr]('div');
            divCarrito.className = 'divMostrarCarrito';
            div2.appendChild(divCarrito);
            let ulCarrito = d[_cr]('ul');
            ulCarrito.className = 'ulCarrito';
            ulCarrito.id = 'idCarrito';
            let liCarrito = d[_cr]('li');
            liCarrito.innerHTML = aCarrito[i].Nombre;
            let liCarrito2 = d[_cr]('li');
            liCarrito2.innerHTML = ' $ ' + aCarrito[i].Precio;
            button = d[_cr]('button');
            button.innerHTML = 'delete_forever';
            button.className = 'material-icons';
            button.dataset.precio = aCarrito[i].Precio;
            button.dataset.id = i;
            button.dataset.nombre = aCarrito[i].Nombre;
            button.addEventListener("click", Borrar);
            ulCarrito.appendChild(liCarrito);
            ulCarrito.appendChild(liCarrito2);
            divCarrito.appendChild(ulCarrito)
            div2.appendChild(divCarrito);
            divCarrito.appendChild(button);
            
        }
        // ------ creo el div monto a pagar y cantidad de productos
        divValores = d.createElement('div');
        divValores.id = 'divValores';
        div2.appendChild(divValores);

        let h3Total = d.createElement('h3');
        h3Total.innerHTML = 'Total a Pagar' + '$ ';
        let spanH3 = d.createElement('span');
        spanH3.id = 'spanH3';
        spanH3.innerHTML = aPrecioTotal.total;
        spanH3.innerHTML = spanTotal.textContent;
        h3Total.appendChild(spanH3);
        divValores.appendChild(h3Total);
        let h4Total = d[_cr]('h4');
        h4Total.innerHTML = 'Cantidad de productos ';
        parrafoTotalItems = d.createElement('span');
        parrafoTotalItems.className = 'parrafoTotalItems';
        parrafoTotalItems.innerHTML = parseInt(cant.textContent);
        h4Total.appendChild(parrafoTotalItems);
        divValores.appendChild(h4Total);

        divBotones = d.createElement('div');
        divBotones.className = 'divBotones';
        divBotones.id = 'divBotones';
        div2.appendChild(divBotones);
       
        // creo boton limpiar carrito
        btn5 = d.createElement('p');
        btn5.className = 'LimpiarCompra';
        btn5.innerHTML = 'Vaciar Carrito';
        btn5.addEventListener("click", limpiarCarrito);
        divBotones.appendChild(btn5);
        // creo boton seguir comprando
        btn6 = d.createElement('p');
        btn6.className = 'LimpiarCompra';
        btn6.innerHTML = 'Seguir Comprando';
        divBotones.appendChild(btn6);
        // bton seguir comprando 
        btn6.onclick = function () {
            d.body.removeChild(d[_id]('modalProducto'));
        }
        // creo boton pagar producto
        btn4 = d.createElement('button');
        btn4.className = 'botonFinCompra';
        //btn4.onclick = pagarProducto;
        btn4.addEventListener("click", pagarProducto);
        btn4.innerHTML = 'Pagar';
        divBotones.appendChild(btn4);
       
    }
    let a = d.createElement('a');
    a.href = '#';
    a.innerHTML = 'X';
    a.onclick = function () {

        d.body.removeChild(d[_id]('modalProducto'));
        return false;
    }
    
    d.body.appendChild(div);
    div.appendChild(a);
   
}
function limpiarCarrito() {
    d.body.removeChild(d[_id]('modalProducto')).children;
    valor = 0;
    cant = 0;
    acum = 0;    
    aPrecioTotal.total = 0;
    spanTotal.innerHTML = aPrecioTotal.total;
    acum -= parseInt(valor);
    cont = 0;
    cant = d[_qs]('header h1~div > p ');
    cant.innerHTML = cont++;
    let div = d.createElement('div');
    div.className = 'modal';
    div.id = 'modalProducto21';
    let div2 = d.createElement('div');
    div2.className = 'div2';
    div2.id = 'div2';
    div.appendChild(div2);
    if (valor == '' || !valor) {
        let tex = d.createElement('p');
        tex.className = 'texCarritoVacio';
        tex.innerHTML = 'Tu carrito está vacío';
        let texPre = d[_cr]('p');
        texPre.className = 'texCarritoVacioA';
        texPre.innerHTML = '¿No sabés qué comprar? ¡Miles de productos te esperan!';
        div2.appendChild(tex);
        div2.appendChild(texPre);
        aCarrito = [];
    }
    // bton cerrar modal
    let a = d.createElement('a');
    a.href = '#';
    a.innerHTML = 'X';
    a.onclick = function () {
        d.body.removeChild(d[_id]('modalProducto21'));
        return false;
    }
    d.body.appendChild(div);
    div.appendChild(a);
    return false;
}
function Borrar () {
    // remuevo el div del producto
    divRemovido = this.parentNode;
    divRemueve = d.getElementById('div2');
    divRemueve.removeChild(divRemovido);

    //descuento el producto del total
    let precioCarrito = parseInt(this.dataset.precio);
    aPrecioTotal.total = parseInt(aPrecioTotal.total) - precioCarrito;

    //descuento la cantidad
    parrafoTotalItems.innerHTML = parseInt(--cant.textContent);

    let h3span = d[_id]('spanH3');
    h3span.innerHTML =  aPrecioTotal.total;

    //actualizo valores del index
    spanTotal.innerHTML = aPrecioTotal.total;
    acum -= parseInt(valor);
    cont--;

    //elimino el producto
    ids = parseInt(this.dataset.id);
    aCarrito.splice(ids, 1);
    console.log(ids);

    console.log(aCarrito);
    if (aCarrito == '' || !aCarrito){
        valor = 0;
        cant = 0;
        acum = 0;    
        aPrecioTotal.total = 0;
        spanTotal.innerHTML = aPrecioTotal.total;
        div2.removeChild(divBotones);
        div2.removeChild(divValores);
        div2.removeChild(carrito);
        let tex = d.createElement('p');
        tex.className = 'texCarritoVacio';
        tex.innerHTML = 'Tu carrito está vacío';
        let texPre = d[_cr]('p');
        texPre.className = 'texCarritoVacioA';
        texPre.innerHTML = '¿No sabés qué comprar? ¡Miles de productos te esperan!';
        div2.appendChild(tex);
        div2.appendChild(texPre);
    } 
}
function pagarProducto() {
    // creo ventana modal confirmar compra
    let divConfirmarCompra = d.createElement('div');
    divConfirmarCompra.className = 'modal';
    divConfirmarCompra.id = 'modalProducto2';
    // creo el div que contiene el formulario de contacto
    divFormulario = d.createElement('div');
    divFormulario.className = 'divFormulario';
    divFormulario.id = 'divFormulario';
    divConfirmarCompra.appendChild(divFormulario);
    // creo el titulo del formulario de contacto
    let h2TituloFormulario = d.createElement('h2');
    h2TituloFormulario.innerHTML = 'Usuarios Registrados';
    divFormulario.appendChild(h2TituloFormulario);
    // creo el div del usuario
    let formIngresoUsuario = d.createElement('form');
    formIngresoUsuario.setAttribute('action', '#');
    formIngresoUsuario.className = 'formIngresoUsuario';
    divFormulario.appendChild(formIngresoUsuario);
    // div nombre
    let divNombre = d.createElement('div');
    divNombre.className = 'divNombre';
    formIngresoUsuario.appendChild(divNombre);
    // creo el  input Nombre formulario
    inputNombre = d.createElement('input');
    inputNombre.type = 'text';
    inputNombre.placeholder = 'Ingrese su nombre';
    inputNombre.id = 'inputNombre';
    inputNombre.className = 'inputNombre';
    inputNombre.autocomplete = 'off';
    divNombre.appendChild(inputNombre);
    // creo el div password
    let divPassword = d.createElement('div');
    divPassword.className = 'divPassword';
    formIngresoUsuario.appendChild(divPassword);
    // creo el input password
    let inputPassword = d.createElement('input')
    inputPassword.type = 'password';
    inputPassword.id = 'inputPassword';
    inputPassword.className = 'inputPassword';
    inputPassword.placeholder = 'Ingrese su Contraseña';
    inputPassword.autocomplete = 'off';
    divPassword.appendChild(inputPassword);
    // CONFIRMAR PASSWORD //
    let divConfirmarPassword = d.createElement('div');
    divConfirmarPassword.className = 'divConfirmarPassword';
    formIngresoUsuario.appendChild(divConfirmarPassword);
    let inputConfirmarPassword = d.createElement('input')
    inputConfirmarPassword.type = 'password';
    inputConfirmarPassword.id = 'inputConfirmarPassword';
    inputConfirmarPassword.className = 'inputConfirmarPassword';
    inputConfirmarPassword.placeholder = 'Confirmar Contraseña';
    inputConfirmarPassword.autocomplete = 'off';
    divConfirmarPassword.appendChild(inputConfirmarPassword);
    // VER PASSWORD //
    let divVerPassword = d.createElement('div');
    divVerPassword.className = 'divVerPassword';
    formIngresoUsuario.appendChild(divVerPassword);
    let inputCheckbox = d.createElement('input');
    inputCheckbox.id = 'inputCheckbox';
    inputCheckbox.type = 'checkbox';
    inputCheckbox.onclick = verPassword;
    divVerPassword.appendChild(inputCheckbox);
    let labelVerPassword = d.createElement('label');
    labelVerPassword.setAttribute('for', 'inputCheckbox');
    labelVerPassword.id = 'labelVerPassword';
    labelVerPassword.className = 'labelNombre';
    labelVerPassword.style.marginLeft = '0.5em';
    labelVerPassword.style.fontSize = '1em';
    labelVerPassword.innerHTML = 'Mostrar Contraseña';
    inputCheckbox.appendChild(labelVerPassword);
    divVerPassword.appendChild(labelVerPassword);
    // creo el bton ingresar
    let buttonIngresar = d.createElement('button');
    buttonIngresar.className = 'buttonIngresar';
    buttonIngresar.id = 'buttonIngresar';
    buttonIngresar.innerHTML = 'Ingresar';
    buttonIngresar.setAttribute("type", "button");
    buttonIngresar.addEventListener('click', confirmarCompra);
    formIngresoUsuario.appendChild(buttonIngresar);
    // bton cerrar modal
    let a = d.createElement('a');
    a.href = '#';
    a.innerHTML = 'X';
    a.onclick = function () {
        d.body.removeChild(d[_id]('modalProducto2'));
        return false;
    }

    d.body.appendChild(divConfirmarCompra);
    divConfirmarCompra.appendChild(a);

    return false;
}
function verPassword() {
    d.querySelector('#inputCheckbox');
    console.info(this);
    if (this.checked) {
        d.querySelector('#inputPassword').type = 'text';
        d.querySelector('#inputConfirmarPassword').type = 'text';
    } else {
        d.querySelector('#inputPassword').type = 'password';
        d.querySelector('#inputConfirmarPassword').type = 'password';
    }
}
function confirmarCompra() {
    let pass1 = d[_id]('inputPassword');
    let pass2 = d[_id]('inputConfirmarPassword');
    let cl1 = pass1.value.trim();
    let cl2 = pass2.value.trim();
    if (cl1 == '' || !cl2.length) {
        msj.style.cssText = 'color: #121212; background-color: yellow;';
        msj.innerHTML = 'Ingresar Contraseñas';
     
    } else if (cl1 != cl2) {
        msj.style.cssText = 'color: #fafafa; background-color: red;';
        msj.innerHTML = 'Las contraseñas no son iguales';
        errorIngreso++;
        if (errorIngreso == 3) {
            msj.style.cssText = 'color: #121212; background-color: #eba622;';
            msj.innerHTML = 'Limite de errores !! intentelo mas tarde';
            pass1.disabled = true;
            pass2.disabled = true;
            let btnIng = d[_id]('buttonIngresar');
            btnIng.disabled = true;
         
        }
    } else {
        
        divFormulario.style.display = 'none';

        let divConfirmarCpra = d[_id]('modalProducto2');
        divConfirmarCpra.id = 'divConfirmarCpra';
        let divPagarProductos = d.createElement('div');
        divPagarProductos.className = 'divFormularioPago';
        divPagarProductos.id = 'divFormularioPago';
        divConfirmarCpra.appendChild(divPagarProductos);
        //------- tarjeta parte delantera -------
        let divContenedor = d[_cr]('div');
        divContenedor.className = 'contenedor';
        divPagarProductos.appendChild(divContenedor);
        let divTarjeta = d[_cr]('div');
        divTarjeta.className = 'tarjeta';
        divTarjeta.id = 'tarjeta';
        divTarjeta.addEventListener("click", girarTarjeta);
        divContenedor.appendChild(divTarjeta);

        let divDelantera = d[_cr]('div');
        divDelantera.className = 'delantera';
        divTarjeta.appendChild(divDelantera);

        let divLogoMarca = d[_cr]('div');
        divLogoMarca.className = 'logoMarca';
        divDelantera.appendChild(divLogoMarca);

        let imgLogo = d[_cr]('img');
        imgLogo.src = 'items/logos/visa.png';
        imgLogo.alt = 'logo visa de creditos';
        divLogoMarca.appendChild(imgLogo);

        let imgChip = d[_cr]('img');
        imgChip.className = 'imgChip';
        imgChip.src = 'items/chip-tarjeta.png';
        imgChip.alt = 'chip tarjeta de credito';
        divDelantera.appendChild(imgChip);

        let divDatos = d[_cr]('div');
        divDatos.className = 'divDatos';
        divDelantera.appendChild(divDatos);
        let divGrupo = d[_cr]('div');
        divGrupo.className = 'divGrupo';
        divGrupo.id = 'numero';
        divDatos.appendChild(divGrupo);

        let pNumeroTarjeta = d[_cr]('p');
        pNumeroTarjeta.className = 'label';
        pNumeroTarjeta.innerHTML = ' Numero Tarjeta';
        divGrupo.appendChild(pNumeroTarjeta);
        let pNumero = d[_cr]('p');
        pNumero.className = 'numero';
        pNumero.innerHTML = '#### #### #### ####';
        divGrupo.appendChild(pNumero);

        let divFlexbox = d[_cr]('div');
        divFlexbox.className = 'divFlexbox';
        divDatos.appendChild(divFlexbox);

        let divGrupoNombre = d[_cr]('div');
        divGrupoNombre.className = 'divGrupo';
        divGrupoNombre.id = 'nombre';
        divFlexbox.appendChild(divGrupoNombre);

        let pNombreTarjeta = d[_cr]('p');
        pNombreTarjeta.className = 'label';
        pNombreTarjeta.innerHTML = ' Nombre Tarjeta';
        divGrupoNombre.appendChild(pNombreTarjeta);
        let pNombre = d[_cr]('p');
        pNombre.className = 'nombre';
        pNombre.innerHTML = 'Jhon Doe';
        divGrupoNombre.appendChild(pNombre);

        let divExpiracion = d[_cr]('div');
        divExpiracion.className = 'divGrupo';
        divExpiracion.id = 'divExpiracion';
        divFlexbox.appendChild(divExpiracion);

        let pExpiracion = d[_cr]('p');
        pExpiracion.className = 'label';
        pExpiracion.innerHTML = 'Expiracion';
        divExpiracion.appendChild(pExpiracion);
        let pFecha = d[_cr]('p');
        pFecha.className = 'expiracion';
        let spanExpiracionMes = d[_cr]('span');
        spanExpiracionMes.innerHTML = 'MM ' + ' / ' ;
        spanExpiracionMes.className = 'mes';
        pFecha.appendChild(spanExpiracionMes);
        let spanExpiracionYear = d[_cr]('span');
        spanExpiracionYear.innerHTML = ' AA';
        spanExpiracionYear.className = 'year';
        pFecha.appendChild(spanExpiracionYear);
        divExpiracion.appendChild(pFecha);
        //---------------- tarjeta parte trasera --------
        let divTarjetaTrasera = d[_cr]('div');
        divTarjetaTrasera.className = 'trasera';
        divTarjeta.appendChild(divTarjetaTrasera);

        let divBarraMagnetica = d[_cr]('div');
        divBarraMagnetica.className = 'divBarraMagnetica';
        divTarjetaTrasera.appendChild(divBarraMagnetica)

        let divDatosTraseros = d[_cr]('div');
        divDatosTraseros.className = 'divDatos';
        divTarjetaTrasera.appendChild(divDatosTraseros)

        let divGrupoTrasero = d[_cr]('div');
        divGrupoTrasero.className = 'divGrupo';
        divGrupoTrasero.id = 'firma';
        divDatosTraseros.appendChild(divGrupoTrasero);

        let pFirma = d[_cr]('p');
        pFirma.className = 'label';
        pFirma.innerHTML = 'Firma';
        divGrupoTrasero.appendChild(pFirma);

        let divFirma = d[_cr]('div');
        divFirma.className = 'firma';
        divGrupoTrasero.appendChild(divFirma);

        let pFirmaDiv = d[_cr]('p');
        pFirmaDiv.innerHTML = '';
        divFirma.appendChild(pFirmaDiv);

        let divCcv = d[_cr]('div');
        divCcv.className = 'divGrupo';
        divCcv.id = 'ccv';
        divDatosTraseros.appendChild(divCcv);

        let pCcv = d[_cr]('p');
        pCcv.className = 'label';
        pCcv.innerHTML = 'CCV';
        divCcv.appendChild(pCcv);

        let pCcvJs = d[_cr]('p');
        pCcvJs.className = 'ccv';
        divCcv.appendChild(pCcvJs);

        let pLeyenda = d[_cr]('p');
        pLeyenda.className = 'leyenda';
        pLeyenda.innerHTML = 'Los datos ingresados deben ser reales de lo contrario se cancela la tarjeta';
        divTarjetaTrasera.appendChild(pLeyenda);

        let aLink = d[_cr]('a');
        aLink.href = '#';
        aLink.innerHTML = 'www.tuBanco.com.ar';
        divTarjetaTrasera.appendChild(aLink);
        // -----------------boton de apertura formulario-----------------
        let divBotonTarjeta = d[_cr]('div');
        divBotonTarjeta.className = 'botonTarjeta';
        let botonCerrarFormulario = d[_cr]('button');
        botonCerrarFormulario.className = 'material-icons';
        botonCerrarFormulario.innerHTML = 'add_circle_outline';
        botonCerrarFormulario.id = 'botonCerrarFormulario';
        botonCerrarFormulario.addEventListener('click', girrarBoton);
        divBotonTarjeta.appendChild(botonCerrarFormulario);
        divContenedor.appendChild(divBotonTarjeta);
        // ----------------- creo el formulario de pago -----------------
        let formIngresoPago = d.createElement('form');
        formIngresoPago.setAttribute('action', '#');
        formIngresoPago.id = 'formIngresoPago'; //formulario-tarjeta
        formIngresoPago.className = 'formIngresoPago';
        divContenedor.appendChild(formIngresoPago);
        // ----- input label numero de tajeta -----------
        let divGrupoFormularioNumero = d[_cr]('div');
        divGrupoFormularioNumero.className = 'divGrupo';
        formIngresoPago.appendChild(divGrupoFormularioNumero);
        let labelNumero = d.createElement('label');
        labelNumero.innerHTML = 'Numero Tarjeta';
        labelNumero.className = 'labelNumero';
        labelNumero.setAttribute('for', 'inputNumero');
        let inputNumero = d.createElement('input');
        inputNumero.id = 'inputNumero';
        inputNumero.className = 'inputNumero';
        inputNumero.name = 'inputNumero';
        inputNumero.type = 'text';
        inputNumero.maxLength = '19';
        inputNumero.autocomplete = 'off';
        //  me ubico sobre el numero de la tarjeta y el nombre de la tarjeta delantera
        let numeroTarjetaDelantera = d[_qs]('#tarjeta .numero');
        console.log(numeroTarjetaDelantera);
        let nombreTarjetaDelantera = d[_qs]('#tarjeta .nombre');
        console.log(nombreTarjetaDelantera);
        // mostrarFrenteTarjeta
        function mostrarFrenteTarjeta() {
           if(tarjeta.classList.contains('active')){
               tarjeta.classList.remove('active');
           }
        }
        inputNumero.addEventListener('keyup', (e) => {
            let valorInputNumero = e.target.value;
            inputNumero.value = valorInputNumero
            .replace(/\s/g, '') // exprecion espacios
            .replace(/\D/g, '') // exprecion letras
            .replace(/([0-9]{4})/g, '$1 ') // exprecion espacio cada 4 numeros
            .trim(); // exprecion saca el ultimo espacio 
            
            numeroTarjetaDelantera.textContent = valorInputNumero;
            if(valorInputNumero == ''){
                numeroTarjetaDelantera.textContent = '#### #### #### ####';
            }
            mostrarFrenteTarjeta();
        });
        //inputNumero.setAttribute('placeholder', 'Ricardo Ruben');
        labelNumero.appendChild(inputNumero);
        divGrupoFormularioNumero.appendChild(labelNumero);
        divGrupoFormularioNumero.appendChild(inputNumero);
        // ------ input label nombre titular tarjeta
        let divGrupoFormularioNombre = d[_cr]('div');
        divGrupoFormularioNombre.className = 'divGrupo';
        formIngresoPago.appendChild(divGrupoFormularioNombre);

        let labelNombrePago = d.createElement('label');
        labelNombrePago.innerHTML = 'Titular';
        labelNombrePago.className = 'labelNombrePago';
        labelNombrePago.setAttribute('for', 'inputNombrePago');
        let inputNombrePago = d.createElement('input');
        inputNombrePago.id = 'inputNombrePago';
        inputNombrePago.className = 'inputNombrePago';
        inputNombrePago.name = 'inputNombrePago';
        inputNombrePago.type = 'text';
        inputNombrePago.maxLength = '19';
        inputNombrePago.autocomplete = 'off';
        inputNombrePago.addEventListener('keyup', (e) => {
            let valorInputNombre = e.target.value;
            inputNombrePago.value = valorInputNombre.replace(/[0-9]/g, ''); // exprecion para eliminar numeros
            
            nombreTarjetaDelantera.textContent = valorInputNombre;
            pFirmaDiv.textContent = valorInputNombre;
            if(valorInputNombre == ''){
                nombreTarjetaDelantera.textContent = 'Jhon Doe';
                
            }
            mostrarFrenteTarjeta();
        });

        labelNombrePago.appendChild(inputNombrePago);
        divGrupoFormularioNombre.appendChild(labelNombrePago);
        divGrupoFormularioNombre.appendChild(inputNombrePago);
        // ------- div expiracion codigo seguridad ----------
        let divGrupoFormularioExtra = d[_cr]('div');
        divGrupoFormularioExtra.className = 'divFlexbox';
        formIngresoPago.appendChild(divGrupoFormularioExtra);

        let divGrupoExpira = d[_cr]('div');
        divGrupoExpira.className = 'divGrupoExpira';
        divGrupoFormularioExtra.appendChild(divGrupoExpira);

        let labelExpira = d[_cr]('label');
        labelExpira.setAttribute('for', 'SelectMes');
        labelExpira.innerHTML = 'Expiracion';
        divGrupoExpira.appendChild(labelExpira);

        let divConExpiracion = d[_cr]('div');
        divConExpiracion.className = 'divFlexbox';
        divGrupoExpira.appendChild(divConExpiracion);

        let divGrupoSelect = d[_cr]('div');
        divGrupoSelect.className = 'divGrupoSelect';
        divConExpiracion.appendChild(divGrupoSelect);
        // --------------- select mes ----------------
        let selectMes = d[_cr]('select');
        selectMes.name = 'mes';
        selectMes.id = 'SelectMes';
        divGrupoSelect.appendChild(selectMes);
        let optionMes = d[_cr]('option');
        //optionMes.value = '';
        optionMes.innerHTML = 'Mes';
        optionMes.disabled = true;
        optionMes.selected = true;
        selectMes.appendChild(optionMes);
        let spanDown = d[_cr]('span');
        spanDown.className = 'material-icons';
        spanDown.innerHTML = 'keyboard_arrow_down';
        selectMes.appendChild(spanDown);
        for (let i = 1; i <= 12; i++) {
            let opcion = d[_cr]('option');
            opcion.value = i;
            opcion.innerHTML = i;
            let selct = d[_id]('SelectMes');
            selct.appendChild(opcion);
        }
        // ----------------- select year -----------------
        let selectYear = d[_cr]('select');
        selectYear.name = 'year';
        selectYear.id = 'SelectYear';
        divGrupoSelect.appendChild(selectYear);
        let optionYear = d[_cr]('option');
        //optionMes.value = '';
        optionYear.innerHTML = 'Año';
        optionYear.disabled = true;
        optionYear.selected = true;
        selectYear.appendChild(optionYear);
        let spanAp = d[_cr]('span');
        spanAp.className = 'material-icons';
        spanAp.innerHTML = 'keyboard_arrow_down';
        selectYear.appendChild(spanAp);
        for (let i = 2021; i <= 2028; i++) {
            let opcionYear = d[_cr]('option');
            opcionYear.value = i;
            opcionYear.innerHTML = i;
            let selctYear = d[_id]('SelectYear');
            selctYear.appendChild(opcionYear);
           
        }
        // --------------- codigo seguridad --------------
        let divGrupoCcv = d[_cr]('div');
        divGrupoCcv.className = 'divGrupoCcv';
        divGrupoFormularioExtra.appendChild(divGrupoCcv);

        let labelCcv = d[_cr]('label');
        labelCcv.className = 'labelCcv';
        labelCcv.innerHTML = 'Ccv';
        labelCcv.setAttribute('for', 'inputCcv');
        let inputCcv = d[_cr]('input');
        inputCcv.type = 'text';
        inputCcv.id = 'inputCcv';
        inputCcv.maxLength = '3';
        labelCcv.appendChild(inputCcv);
        divGrupoCcv.appendChild(labelCcv);
        divGrupoCcv.appendChild(inputCcv);

        buttonEnviarPago = d[_cr]('button');
        buttonEnviarPago.innerHTML = 'Pagar';
        buttonEnviarPago.type = 'button';
        buttonEnviarPago.className = 'buttonEnviarPago';
        buttonEnviarPago.addEventListener('click', confirmarPago);
        formIngresoPago.appendChild(buttonEnviarPago);
        // me ubico sobre el mes y year de expiracion
        let mesExpiracion = d[_qs]('#tarjeta #divExpiracion .mes');
        console.log(mesExpiracion);    
        let yearExpiracion = d[_qs]('#tarjeta #divExpiracion .year');
        console.log(yearExpiracion);
        // me ubico sobre el ccv de la tarjeta
        let CcvValidar = d[_qs]('#tarjeta .ccv');
        console.log(CcvValidar);
        selectMes.addEventListener('change', (e) => {
            mesExpiracion.textContent = e.target.value + ' / ' ; // accedo al valor del elemento
            mostrarFrenteTarjeta();
        });
        selectYear.addEventListener('change', (e) => {
            yearExpiracion.textContent = e.target.value.slice(2); // accedo al valor del elemento
            mostrarFrenteTarjeta();
        });
        inputCcv.addEventListener('keyup', () => {
            if (!tarjeta.classList.contains('active')) {
                tarjeta.classList.toggle('active');
            }
            inputCcv.value = inputCcv.value
            .replace(/\s/g, '') // exprecion espacios
            .replace(/\D/g, ''); // exprecion letras

            CcvValidar.textContent = inputCcv.value;
        });
        let divCreditos = d[_cr]('div');
        divCreditos.className = 'divCreditos';
        divPagarProductos.appendChild(divCreditos);
        let h3Detalle = d[_cr]('h3');
        h3Detalle.className = 'h3Detalle';
        h3Detalle.innerHTML = 'Detalle de la Compra';
        divCreditos.appendChild(h3Detalle);
        let divDatosTitular = d[_cr]('div');
        divDatosTitular.className = 'divDatosTitular';

        let parrNombre = d[_cr]('p');
        parrNombre.className = 'parrNombre';
        parrNombre.innerHTML = 'Nombre de Usuario: ';
        let spanParrNombre = d[_cr]('span');
        spanParrNombre.innerHTML = inputNombre.value;
        parrNombre.appendChild(spanParrNombre);
        divDatosTitular.appendChild(parrNombre);
        
        let parrPaas = d[_cr]('p');
        parrPaas.className = 'parrPaas';
        parrPaas.innerHTML = 'Total a Pagar: $';
        let spanParrPaas = d[_cr]('span');
        spanParrPaas.innerHTML = aPrecioTotal.total;
        parrPaas.appendChild(spanParrPaas);
        divDatosTitular.appendChild(parrPaas);
        divCreditos.appendChild(divDatosTitular);
        // bton cerrar modal
        let a = d.createElement('a');
        a.href = '#';
        a.innerHTML = 'X';
        a.onclick = function () {
            d.body.removeChild(d[_id]('divConfirmarCpra'));
                return false;
            }
        d.body.appendChild(divConfirmarCpra);
        divConfirmarCpra.appendChild(a);
        divFormularioPago.appendChild(msj);
        }
        divFormulario.appendChild(msj);
}
function girarTarjeta() {
    let tarjetaCredito = d[_qs]('#tarjeta');
    tarjetaCredito.classList.toggle('active');
}
function girrarBoton() {
    let botonCerrar = d[_qs]('#botonCerrarFormulario');
    let formularioCerrado = d[_qs]('#formIngresoPago');
    formularioCerrado.classList.toggle('active');
    botonCerrar.classList.toggle('active');
    
}
function confirmarPago() {
    let numeroTrajeta = d[_id]('inputNumero');
    let numeroTrajetaConfir = numeroTrajeta.value.trim();
    divFormularioPago.appendChild(msj);
    if (numeroTrajetaConfir == '' || !numeroTrajetaConfir.length) {
        msj.style.cssText = 'color: #121212; background-color: yellow;';
        msj.innerHTML = 'Ingrese un numero de tarjeta valido';
    } else if (numeroTrajetaConfir.length != 19) {
        msj.style.cssText = 'color: #fafafa; background-color: red;';
        msj.innerHTML = 'Ingrese un numero de tarjeta valido';
        errorIngreso++;
       
        if(errorIngreso == 3) {
            msj.style.cssText = 'color: #121212; background-color: #eba622;';
            msj.innerHTML = 'Limite de errores !! intentelo mas tarde';
            numeroTrajeta.disabled = true;
            //pass2.disabled = true;
            buttonEnviarPago.disabled = true;
        }
    } else {
        let TimerInicio = setTimeout (timerInicio, 1000);
        function timerInicio() {
            let div = d[_cr]('div');
            div.className = 'modalTimer';
            div.id = 'ventanaTimer';
            
            let divConfirmarPago = d[_cr]('div');
            divConfirmarPago.className = 'divConfirmarPago';
            div.appendChild(divConfirmarPago);
            
            let imagenConfirmar = d[_cr]('img');
            imagenConfirmar.src = 'items/Asset1-8.png';
            imagenConfirmar.alt = 'logo marca';
            divConfirmarPago.appendChild(imagenConfirmar);

            let h2ConfirmarPago = d[_cr]('h2');
            h2ConfirmarPago.className = 'h2ConfirmarPago';
            h2ConfirmarPago.innerHTML = 'Tu pago se acredito exitosamente !!';
            divConfirmarPago.appendChild(h2ConfirmarPago);

            let paConfirmarPago = d[_cr]('p');
            paConfirmarPago.className = 'paConfirmarPago';
            paConfirmarPago.innerHTML = 'Gracias por elegirnos';
            divConfirmarPago.appendChild(paConfirmarPago);

            let a = d.createElement('a');
            a.href = '#';
            a.innerHTML = 'X';
            a.onclick = function () {
                d.body.removeChild(d[_id]('ventanaTimer'));
                clearTimeout(TimerInicio)
                return false;
            }
            d.body.appendChild(div);
            div.appendChild(a);
        }
        itemsCarrito.innerHTML = 0;
        itemsCarrito2.innerHTML = 0;
        spanTotal.innerHTML = 0;
        valor = 0;
        cant = 0;
        acum = 0; 
        numeroTrajeta = '';
        aPrecioTotal.total = 0;
        aCarrito = [];
        //d.body.removeChild(d[_id]('modalProducto2'));
        buttonEnviarPago.disabled = true;
        acum -= parseInt(valor); 
        --cont;
        
        d.body.removeChild(d[_id]('modalProducto'));
        d.body.removeChild(d[_id]('divConfirmarCpra'));
    }
}
function AmpliarHombres() {
    //---------- creo el modal fltro categorias  hombres--------
    let div = d[_cr]('div');
    div.className = 'modalHombre';
    div.id = 'ventanaHombres';
    let divHombre = d[_cr]('div');
    divHombre.className = 'divHombre';
    divHombre.id = 'divHombre';
    div.appendChild(divHombre);

    let divFotHombres = d[_cr]('div');
    divFotHombres.className = 'divFotHombres';
    let imgHombre = d[_cr]('img');
    imgHombre.src = 'items/0001_fondoHombres.png';
    imgHombre.alt = 'Foto hombre snow';
    let h2Hombre = d[_cr]('img')
    h2Hombre.className = 'h2Hombre';
    h2Hombre.src = 'items/Asset1-8.png';
    divFotHombres.appendChild(h2Hombre);
    divFotHombres.appendChild(imgHombre);
    divHombre.appendChild(divFotHombres);
    /*---------------filtro categorias-----------------*/
    let newArray = aProductos.filter(item => {
        if(item.catgria === 1){
            return true;
        } else {
            return false;
        }
    });
    for (let i = 0; i < newArray.length; i++) {
        let divProdFiltro = d[_cr]('div');
        divProdFiltro.className = 'divProductos';
        divHombre.appendChild(divProdFiltro);

        img = d[_cr]('img');
        img.src = newArray[i].Imagen.src;
        img.alt = newArray[i].Imagen.alt;
        divProdFiltro.appendChild(img);
        
        let divInfoHombres = d[_cr]('div');
        divInfoHombres.className = 'divInfoHombres';
        divProdFiltro.appendChild(divInfoHombres);
        h3 = d[_cr]('h3');
        h3.innerHTML = newArray[i].Nombre;
        h3.style.padding = '1em';
        divInfoHombres.appendChild(h3);
        
        p = d[_cr]('p');
        p.innerHTML = ' Precio: $';
        span = d[_cr]('span');
        span.innerHTML = newArray[i].Precio;
        p.appendChild(span);
        divInfoHombres.appendChild(p);
    }
    let a = d.createElement('a');
    a.href = '#';
    a.innerHTML = 'X';
    a.onclick = function () {
        d.body.removeChild(d[_id]('ventanaHombres'));
        return false;
    }
    d.body.appendChild(div);
    div.appendChild(a);
    
}
function AmpliarMujeres() {
    //---------- creo el modal fltro categorias  hombres--------
    let div = d[_cr]('div');
    div.className = 'modalHombre';
    div.id = 'ventanaHombres';
    let divMujeres = d[_cr]('div');
    divMujeres.className = 'divHombre';
    divMujeres.id = 'divHombre';
    div.appendChild(divMujeres);

    let divFotMujeres = d[_cr]('div');
    divFotMujeres.className = 'divFotHombres';
    let imgMujeres = d[_cr]('img');
    imgMujeres.src = 'items/bannerMujeres.png';
    imgMujeres.alt = 'Foto hombre snow';
    let h2Mujer = d[_cr]('img')
    h2Mujer.className = 'h2Hombre';
    h2Mujer.src = 'items/Asset1-8.png';
    divFotMujeres.appendChild(h2Mujer);
    divFotMujeres.appendChild(imgMujeres);
    divMujeres.appendChild(divFotMujeres);
    /*---------------filtro categorias-----------------*/
    let newArray = aProductos.filter(item => {
        if(item.catgria === 2){
            return true;
        } else {
            return false;
        }
    });
    for (let i = 0; i < newArray.length; i++) {
        let divProdFiltro = d[_cr]('div');
        divProdFiltro.className = 'divProductos';
        divMujeres.appendChild(divProdFiltro);

        img = d[_cr]('img');
        img.src = newArray[i].Imagen.src;
        img.alt = newArray[i].Imagen.alt;
        divProdFiltro.appendChild(img);
        
        let divInfoMujeres = d[_cr]('div');
        divInfoMujeres.className = 'divInfoHombres';
        divProdFiltro.appendChild(divInfoMujeres);

        h3 = d[_cr]('h3');
        h3.innerHTML = newArray[i].Nombre;
        h3.style.padding = '1em';
        divInfoMujeres.appendChild(h3);
        
        p = d[_cr]('p');
        p.innerHTML = ' Precio: $';
        span = d[_cr]('span');
        span.innerHTML = newArray[i].Precio;
        p.appendChild(span);
        divInfoMujeres.appendChild(p);
    }
    let a = d.createElement('a');
    a.href = '#';
    a.innerHTML = 'X';
    a.onclick = function () {
        d.body.removeChild(d[_id]('ventanaHombres'));
        return false;
    }
    d.body.appendChild(div);
    div.appendChild(a);
}

let sentido = 1;
let anuncio = setInterval(
    function(){
        let o = parseFloat(timer_titulos.style.opacity);
        if (o <= 0){
            sentido = 1;
        } else if (o >= 1){
            sentido = -1;
        }
        timer_titulos.style.opacity = o + .1 * sentido;
    },
    100
);
let timer_titulos = d[_cr]('img');
timer_titulos.src = 'items/Asset1-8.png';
timer_titulos.alt = 'logo de wildboard';
timer_titulos.style.width = '20%';
timer_titulos.style.fontSize = '3em';
timer_titulos.style.textAlign = 'center';
timer_titulos.style.padding = '1.5em';

timer_titulos.style.opacity = 0;
section.appendChild(timer_titulos);

