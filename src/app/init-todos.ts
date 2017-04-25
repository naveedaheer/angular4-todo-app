export class Init{
    loadTodos(){
        if(localStorage.getItem('todos')===null || localStorage.getItem('todos')== undefined){
            console.log("No todos found. its creating now...");
            var todos = [
                {
                    text: 'Drink Water'
                },
                {
                    text: 'Learn Angular 4'
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return
        }else
        {
            console.log('todos found ...')
        }
    }
}