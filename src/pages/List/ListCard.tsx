import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {addNewCardTC, CardsType, deleteCardTC, updateCardTC} from "./cardsReducer";
import {Cards} from "./Cards";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import {CardsPackType} from "./cardsPackReducer";

export const ListCard = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardsType[]>(state => state.cards.cards)
    const idPack = useSelector<AppRootStateType, string>(state => state.cards.id)
    const packs = useSelector<AppRootStateType, CardsPackType[]>(state => state.packs.cardPacks)

    console.log("packs=",packs)
    console.log("cards=",cards)
    console.log(idPack)
    const addCard = () => {
        dispatch(addNewCardTC(1, 7, idPack))
    }

    const deleteCard = (idCard: string) => {
        dispatch(deleteCardTC(1,7, idCard, idPack))
    }

    const updateCard = (idCard: string) => {
        dispatch(updateCardTC(idCard,idPack, 1,7))
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
                    <th><SuperButton onClick={addCard}> ADD </SuperButton></th>
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

        </div>
    )
}