import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {addNewCardTC, CardsType, deleteCardTC, updateCardTC} from "./cardsReducer";
import {Cards} from "./Cards";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import {CardsPackType} from "./cardsPackReducer";
import {Modal} from "../../components/Modal/Modal";

export const ListCard = () => {
    const dispatch = useDispatch()
    const [modalActive, setModalActive] = useState<boolean>(false)
    const [question, setQuestion] = useState<string>('')
    const cards = useSelector<AppRootStateType, CardsType[]>(state => state.cards.cards)
    const idPack = useSelector<AppRootStateType, string>(state => state.cards.id)
    const packs = useSelector<AppRootStateType, CardsPackType[]>(state => state.packs.cardPacks)

    const addCard = () => {
        dispatch(addNewCardTC(1, 7, idPack, question))
        setModalActive(false)
        setQuestion('')
    }

    const deleteCard = (idCard: string) => {
        dispatch(deleteCardTC(1,7, idCard, idPack))
    }

    const updateCard = (idCard: string, question:string) => {
        dispatch(updateCardTC(idCard,idPack, 1,7, question))

    }

    return (
        <div>

            <table>
                <tbody>
                <tr>
                    <th>question</th>
                    <th>answer</th>
                    <th>updated</th>
                    <th>rating</th>
                    <th><SuperButton onClick={()=>{setModalActive(true)}}> ADD </SuperButton></th>
                </tr>
            {cards && cards.map(t=>{
                return <Cards key={t._id} id={t._id} updated={t.updated}
                              answer={t.answer} deleteCard={deleteCard}
                              created={t.created}  updateCard={updateCard}
                              question={t.question} cardsPack_id={t.cardsPack_id}
                              rating={t.rating}
                />
            })}
                </tbody>
            </table>

            <Modal active={modalActive} setActive={setModalActive}>
                <div style={{color: "black"}}>
                    <label> enter question </label>
                    <input type={"text"} onChange={(e) => {
                        setQuestion(e.target.value)
                    }}/>
                </div>
                <SuperButton onClick={addCard}> SAVE</SuperButton>


            </Modal>

        </div>
    )
}