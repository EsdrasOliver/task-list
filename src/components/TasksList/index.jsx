import { useState, useEffect } from "react"
import { BsTrash } from "react-icons/bs"
import "./index.css"
import Loading from "../Loading"

function TasksList() {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if(localStorage.getItem('ls_todos')) {
            const storedList = JSON.parse(localStorage.getItem('ls_todos'))
            setTodos(storedList)
        }
        setLoading(false)
    }, [])

    if(loading) {
        return <Loading />
    }

    const addTodo = () => {
        if(todo) {
            const newTodo = { 
                id: new Date().getTime().toString(), 
                title: todo
            }
            setTodos([...todos, newTodo])
            localStorage.setItem('ls_todos', JSON.stringify([...todos, newTodo]))
            setTodo('')
        }
    }

    const handleDelete = (todo) => {
        const deleted = todos.filter((t) => t.id !== todo.id)
        setTodos(deleted)
        localStorage.setItem('ls_todos', JSON.stringify(deleted))
    }

    const handleClear = () => {
        setTodos([])
        localStorage.removeItem('ls_todos')
    }

    return (
        <div className="container-todo">
            <h2>Insira suas tarefas</h2>
            <div className="container-input-button">
                <input 
                    type="text"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    placeholder="Digite sua tarefa"
                />
                <button className="botao" onClick={addTodo}>Adicionar</button>
            </div>
            <p>
                {!todos.length? 'Sem tarefa' :
                todos.length == 1 ? 'Você tem 1 tarefa' :
                todos.length > 1 ? `Você tem ${todos.length} tarefas` :
                null}
            </p>
            <div>
                <h3>Lista de tarefas</h3>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} className="todo">
                            <span>{todo.title}</span>
                            <BsTrash onClick={() => handleDelete(todo)} />
                        </li>
                    ))}
                </ul>
                {todos.length ? (
                    <div>
                        <button className="botao" onClick={() => handleClear()}>Limpar</button>
                    </div>
                ) : null} 
            </div>
        </div>
    );
}

export default TasksList;