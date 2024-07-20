'use client'

const newPromise = new Promise ((res,rej)=>{
    setTimeout(()=>{
      res('Contact us page will be added soon ')
    },5000)
})


export default function contactus(){
    const promise = newPromise;
    return(
        <>
        {promise}
        <div>Contact Us</div>
        </>
    )
}