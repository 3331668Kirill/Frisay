import React, {Dispatch, SetStateAction, useState} from "react";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import {Modal} from "../../components/Modal/Modal";




type CardsPropsType = {
    answer: string
    created?: string
    question: string
    rating: number
    updated: string
    id: string
    cardsPack_id?:string
    deleteCard:(idCard: string)=>void
    updateCard:(idCard: string, question: string)=>void

}


export const Cards = ({ id, answer, updated, deleteCard,
                          question, rating, updateCard,
                          }: CardsPropsType) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const [newQuestion, setNewQuestion] = useState<string>('')
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
                    <SuperButton onClick={()=>{setModalActive(true)}}> UPDATE</SuperButton>

                </td>
            </tr>

            <Modal active={modalActive} setActive={setModalActive}>
                <div style={{color: "black"}}>
                    <label> enter question </label>
                    <input type={"text"}  onChange={(e) => {
                        setNewQuestion(e.target.value)
                    }}/>
                </div>
                <SuperButton onClick={() => {
                    updateCard(id, newQuestion)
                    setModalActive(false)
                    setNewQuestion('')
                }}> UPDATE </SuperButton>


            </Modal>

        </>
    )
}