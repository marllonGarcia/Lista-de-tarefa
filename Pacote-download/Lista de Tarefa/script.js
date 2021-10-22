
//pegando os elementos do DOM
const lista = document.querySelector('ul') 
const input = document.querySelector('input')
const botao = document.querySelector('button')

const tarefas = []



        function mostraTarefa() {

       
        
            lista.innerHTML = ''


            for (tarefa of tarefas){
                const elementoTarefa = document.createElement('li')
                const textoTarefa = document.createTextNode(tarefa)

                const elementoLink = document.createElement('a')
                const posi = tarefas.indexOf(tarefa)

                const linkText = document.createTextNode('X')
                elementoLink.appendChild(linkText)

                elementoLink.setAttribute('onclick' , `deleteTarefa(${posi})`)


            elementoTarefa.appendChild(textoTarefa)
            lista.appendChild(elementoTarefa)
             elementoTarefa.appendChild(elementoLink)

            }
            
        }
   
    

        function addTarefa() {
            const textoTarefa = input.value
            tarefas.push(textoTarefa)
            input.value = ''

            mostraTarefa()
        }

        botao.setAttribute('onclick', 'addTarefa()')

        function deleteTarefa(posi) {
            tarefas.splice(posi, 1)
            mostraTarefa()
        }
