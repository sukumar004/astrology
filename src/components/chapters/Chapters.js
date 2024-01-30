import React from 'react'
import './chapter.css'
import chap from '../../source/chapters.json'

function Chapters() {

    const chapters = [
        {
        "key":1,
        "title":"General Predictions for the entire life period",
        "description" : "To find out through 'ladies' left and gents right thumb impressions with precise,birth details findings about names parents names, present details of profession, brothers, sisters, maternal uncles, Spouse and future predictions",
        "img":"https://drive.google.com/uc?export=download&id=1pnomZmI2eeWQqf79zYtlvjZbkm6b-qzM"
        },
        {
        "key":1,
        "title":"General Predictions for the entire life period",
        "description" : "To find out through 'ladies' left and gents right thumb impressions with precise,birth details findings about names parents names, present details of profession, brothers, sisters, maternal uncles, Spouse and future predictions",
        "img":"https://drive.google.com/uc?export=download&id=1pnomZmI2eeWQqf79zYtlvjZbkm6b-qzM"
        }
    
    ]

    const chaptersList = chap.map((chapter,index)=>{
        return(
            <div className="chapter-list" key={index}>

                <div className="chapter-img">
                    <img src={chapter.img} alt={chapter.title} />
                </div>
                
                <div className="chapter-details">
                    <h1>{`Chapter : ${chapter.id}`}</h1>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.description}</p>
                </div>

            </div>
        )
    })
  return (
    <div className="chapters-top-parent">

        <div className="chapter-page-heading-bg">
            <h1>Chapters</h1>
            {/* <img src="/chaptersImages/h-1.png" alt="Chapters" /> */}
            {/* <img src="/chaptersImages/h-3.png" alt="Chapters" />     */}
        </div>

        <div className="chapter-list-parent">
            {chaptersList}
        </div>
    </div>
  )
}

export default Chapters