import React from 'react'
export function useKey(key, cb) {
    const callbackRef = React.useRef(cb)

    React.useEffect(() => {
        callbackRef.current = cb;
    });

    React.useEffect(()=> {
        function handle(event) {
            if(event.code === key) {
                callbackRef.current(event);
            }
        }
        document.addEventListener('keydown', handle);
        return ()=> document.removeEventListener('keydown', handle);
    }, [key])
}