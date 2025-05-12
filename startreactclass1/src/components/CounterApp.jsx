
export default function CounterApp({ count, setNumber }) {
    function inc() {
        count++;
        setNumber(count);
        if (count > 10) {
            setNumber(0)
        }


    }

    function dnc() {
        
        if (count >0) {
            setNumber(count--);
            
        }
        
    }
    function rnc() {
        setNumber(0);
    }
    return (
        <div >
            <div className="counter">
                <div><button onClick={inc}>Increment</button></div>
                <div>{count}</div>
                <div><button onClick={dnc}>Decrement</button></div>
                <div><button onClick={rnc}>Reset</button></div>
            </div>

        </div>
    )
}
