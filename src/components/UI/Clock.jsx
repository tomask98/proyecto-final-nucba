import React,{useState, useEffect} from 'react'

const Clock = () => {
  const [days, setDays]= useState()
  const [hours, setHours]= useState()
  const [minutes, setMinutes]= useState()
  const [seconds, setSeconds]= useState()

  let interval ;
  const contDown = () =>{

    const Limit = new Date('january 31, 2023').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const dif =  Limit - now
      const days = Math.floor(dif/ (1000 * 60 *60 *24))
      const hours = Math.floor(dif % (1000 * 60 *60 *24) /(1000 * 60 *60 ))
      const minutes = Math.floor(dif % (1000 * 60 *60) /(1000 * 60 ))
      const seconds = Math.floor(dif % (1000 * 60) /1000)

      if(interval < 0 ) clearInterval(interval.current)
      else{
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }

    });
  }
  useEffect(()=>{
    contDown();
  })



return (
  <div className="clock__wraper  d-flex align-items-center gap-3 mt-4">
      <div className="clock__Data d-flex align-items-center gap-3">
          <div className='text-center'>
              <h1 className='text-white fs-3 mb-1'>{days}</h1>
              <h5 className='text-white fs-6'>Dias</h5>
          </div>
          <span className='text-white fs-3'>:</span>

      </div>

      <div className="clock__Data d-flex align-items-center gap-3">
          <div className='text-center'>
              <h1 className='text-white fs-3 mb-1'>{hours}</h1>
              <h5 className='text-white fs-6'>Horas</h5>
          </div>
          <span className='text-white fs-3 d-flex align-items-top'>:</span>

      </div>

      <div className="clock__Data d-flex align-items-center gap-3">
          <div className='text-center'>
              <h1 className='text-white fs-3 mb-1'>{minutes}</h1>
              <h5 className='text-white fs-6'>Minutos</h5>
          </div>
          <span className='text-white fs-3'>:</span>

      </div>
      <div className="clock__Data d-flex align-items-center gap-3">
          <div className='text-center'>
              <h1 className='text-white fs-3 mb-1'>{seconds}</h1>
              <h5 className='text-white fs-6'>segundos</h5>
          </div>
          

      </div>
  </div>
)
}
export default Clock