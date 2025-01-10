import Todo from "./Todo.js";
export default function Todos({ setRender }) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let hope;
    if (todos != null) {
        hope = todos.map((item, index) => {
            return <Todo setRender={setRender} index={index} value={item[0]} checked={item[1]} key={crypto.randomUUID()} />;
        });
    } else {
        return <div></div>;
    }
    return (
        <>
            <div className="h-[26rem] overflow-auto">{hope}</div>
        </>
    );
}
