import React from "react";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";



type CardsPropsType = {
    answer: string
    created?: string
    question: string
    rating: number
    updated: string
    id: string
    cardsPack_id?:string
    deleteCard:(idCard: string)=>void
    updateCard:(idCard: string)=>void
}


export const Cards = ({ id, answer, updated, deleteCard,
                          question, rating, updateCard,
                          }: CardsPropsType) => {

    return (
        <>
            <tr key={id}>
                <td>{question}</td>
                <td>{answer}</td>
                <td>{updated}</td>
                <td>{rating}</td>
                {/*<td>{cardsPack_id}</td>*/}
                <td>{id}</td>

                <td>
                    <SuperButton onClick={() =>deleteCard(id)}> DEL</SuperButton>
                    <SuperButton onClick={() => updateCard(id)}> UPDATE</SuperButton>

                </td>
            </tr>
        </>
    )
}