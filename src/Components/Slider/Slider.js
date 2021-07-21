import React,{useState} from 'react'

export default function Slider(data) {
    const [index, setIndex] = useState(0)
    const [SlideValue, setSlideValue] = useState(data.slides[0])
    const dataValue = data.slides
    console.log(dataValue);
    function handleRestart(){
        setIndex(0)
    }
    function handlePrev(){
        setIndex(index -1)
    }
    function handleNext(){
        setIndex(index+1)
    }
    const dataSlide = ()=>{
        // console.log(data.slides[index]);
        const slide = dataValue[index]
        // const title = slide.title
        // const text = slide.text
        return <div>
                {/* <h4>{slide.title}</h4>
                <h4>{slide.text}</h4> */}
            </div>
    }
    
    return (
        <>
            <div>
                <button onClick={handleRestart} disabled={index === 0 ? true : false}>Restart</button>
                <button onClick={handlePrev} disabled={index === 0 ? true : false}>Prev</button>
                <button onClick={handleNext} disabled={index === data.slides.length-1 ? true : false}>Next</button>
            </div>
            {dataSlide()}
        </>
    )
}
