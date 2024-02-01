import React from 'react';
import './nadiProcedure.css';
import data from '../../source/nadiProcedure.json'

function NadiProcedure() {

  // const a = 'When a thumb impression from a native is obtained it is handed over by the reader at the library. The palm-leaf bundles are classified &indexed in the library according to thumb impression to facilitate easy searching of the bundles. For each thumb impression there are likely to be around 5 to 6 bundles; each such bundle will contain between 50 to 100 leaves. When a thumb impression from a native is obtained it is handed over by the reader at the library. The palm-leaf bundles are classified &indexed in the library according to thumb impression to facilitate easy searching of the bundles. For each thumb impression there are likely to be around 5 to 6 bundles; each such bundle will contain between 50 to 100 leaves. When a thumb impression from a native is obtained it is handed over by the reader at the library. The palm-leaf bundles are classified &indexed in the library according to thumb impression to facilitate easy searching of the bundles. For each thumb impression there are likely to be around 5 to 6 bundles; each such bundle will contain between 50 to 100 leaves.'

  // const aa = ['New Word','Second']
  // const bb = [2,[2]]
  // aa.push(bb)
  // console.log(aa.flat().flat())  

  // const a_answer = a.split(".")
  // const numberAnswer = Math.floor(Number(a_answer.length)/3)

  // console.log(numberAnswer)

  // console.log(a_answer[3])

  // const newArray = []

  // newArray.concat(a_answer.slice(0,3))

  // console.log("newArray",newArray.flat())


  // const answer = a_answer.map((val)=>{
  //   return(
  //     <p>{val}</p>
  //   )
  // })

  // console.log(answer)

  const contentFunction = (content) => {

    const separateByDots = content.split(".")
    const contentListing = separateByDots.map((val)=>{
      return(
        <p>{val}</p>
      )
    })

    return contentListing
  }


  return (
    <div className="nadi-procedure-top-parent">

        <div className="nadi-procedure-heading">
            <h1>Nadi Procedure</h1>
        </div>

        <div className="nadi-procedure-listing-parent">

        {data.map((val,index)=>{
              return(
                
            <div className="nadi-procedure-listing" key={index}>

             <div className="nadi-procedure-list-title">
               <h3>{`Step ${val.id}`}</h3>
             <img src="/svg/divider3.svg" alt="Nadi Procedure" id='divider-id' />

             </div>

             <div className="nadi-procedure-image-list">

                <div className="nadi-procedure-image">
                  <img src={val.img} alt={val.title} />
                </div>

                <div className="nadi-procedure-list">
                  <h4>{val.title}</h4>
                  {contentFunction(val.content)}
                </div>

             </div>
             {/* <hr style={{zIndex:'999999',width:'100%',margin:'5rem 0 -5rem 0'}} /> */}
            </div>
            )
          })}

        </div>

    </div>
  )
}

export default NadiProcedure