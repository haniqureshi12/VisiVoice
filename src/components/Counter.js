import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    
     <div>
     <center>  
      <h2>Counter Application</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </center>
    </div>
    
  );
}

export default Counter;