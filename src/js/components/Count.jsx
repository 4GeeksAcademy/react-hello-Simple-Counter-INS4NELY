import React, { useState, useEffect, useRef } from "react";
import PropTypes, { string } from 'prop-types';

const Counter = (props) => {
    const [isCounterRun, setCounterRun] = useState(props.number);
    const [isCounterDown, setCounterDown] = useState(0)
    const [isTrueOrFalse, setIsTrueOrFalse] = useState(false)
    const intervalRef = useRef(null)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
          setCounterRun(prev => prev + 1); 
        }, 1000);
        return () => clearInterval(intervalRef.current); 
      }, []); 
      
      const detener = () => {
        clearInterval(intervalRef.current);
      }

      const reset = () => {
        setCounterRun(0)
        setCounterDown(0)
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsTrueOrFalse(false)
      }

      const countUp = () => {
        setIsTrueOrFalse(false)
        intervalRef.current = setInterval(() => {
            setCounterRun(prev => prev + 1); 
        }, 1000);
    
      }

      const countDown = () => {
            setIsTrueOrFalse(true)
            intervalRef.current = setInterval(() => {
            setCounterDown(prev => {
                if (prev === 0) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    return 0;
                }
                return prev - 1
            }); 
          }, 1000);
      }

    const digitos = (isTrueOrFalse === false ?  isCounterRun : isCounterDown).toString().padStart(6, '0').split('');
    
    return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center gap-4 base-count mt-2 position-absolute top-50 start-50 translate-middle">
            <i className="imagenCount d-flex justify-content-center align-items-center ri-time-line display-1 text-white mb-2"></i>
            <h4 className="counter d-flex justify-content-center align-items-center display-1 text-white pb-2 fw-semibold">{digitos[0]}</h4>
            <h4 className="counter d-flex justify-content-center align-items-center display-1 text-white pb-2 fw-semibold">{digitos[1]}</h4>
            <h4 className="counter d-flex justify-content-center align-items-center display-1 text-white pb-2 fw-semibold">{digitos[2]}</h4>
            <h4 className="counter d-flex justify-content-center align-items-center display-1 text-white pb-2 fw-semibold">{digitos[3]}</h4>
            <h4 className="counter d-flex justify-content-center align-items-center display-1 text-white pb-2 fw-semibold">{digitos[4]}</h4>
            <h4 className="counter d-flex justify-content-center align-items-center display-1 text-white pb-2 fw-semibold">{digitos[5]}</h4>
        </div>
        <div className="positionBtn d-flex align-items-center justify-content-center gap-3 w-100">
            <div className="d-flex flex-column gap-2">
                <input id="cuentaRegresiva" className="form-control" type="text" name="" placeholder="Choise a countdown" onChange={e => setCounterDown(e.target.value)}  />
                <button id="btnCountdown" type="button" className="btn btn-success" onClick={() => {detener(); countDown();}} >Countdown</button>
            </div>
            <div className="px-4">
                <button type="button" className="btn btn-danger" onClick={detener}>Stop</button>
                <button type="button" className="btn btn-warning mx-4" onClick={reset}>Reset</button>
                <button type="button" className="btn btn-success" onClick={() => {detener(); (isTrueOrFalse === false ? countUp() : countDown())}}>Resume</button>
            </div>

        </div>
    </div>
    
)
}

Counter.propTypes = {
    number: PropTypes.number
}
export default Counter;