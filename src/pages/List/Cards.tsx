import React from "react";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";



type CardsPropsType = {
    answer: string
    created: string
    grade: number
    question: string
    rating: number
    updated: string
    user_id: string
    id: string
}


export const Cards = ({ id, answer, updated, grade, question, rating, user_id, created}: CardsPropsType) => {

    return (
        <>
            <tr key={id}>
                <td>{question}</td>
                <td>{answer}</td>
                <td>{updated}</td>
                <td>{rating}</td>
                <td>
                    <SuperButton onClick={() =>{}}> DEL</SuperButton>
                    <SuperButton onClick={() => {}}> UPDATE</SuperButton>

                </td>
            </tr>
        </>
    )
}