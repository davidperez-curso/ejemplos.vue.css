// COMPONENTE PARA EL ÚLTIMO EJEMPLO
Vue.component ('componente',{
    template:
    /*html*/`
    <div>
        <h1 :style="objetoComponente">
            Este es el último ejemplo, desde un componente
        </h1>
        <p>se agregan estilos al componente mediante data (que se trabaja como función en un componente) 
        retornando los estilos con un objeto.</p>
    </div>

    `,
    data() {
        return{
            objetoComponente: {
                fontFamily: 'fantasy',
                color: 'brown',
                fontStyle: 'italic'
            }
        }
    }
})

//INSTANCIA VUE PARA LOS PRIMEROS 4 EJEMPLOS
const app = new Vue({
    el: '#app',
    data:{
        tipo: 'fantasy',
        color: 'red',
        estilo: 'italic',
        todo: "font-family : fantasy; color : black; font-style : italic;",
        objeto: {
            fontFamily: 'fantasy',
            color: 'white',
            fontStyle: 'italic'
        }
    }

    
})