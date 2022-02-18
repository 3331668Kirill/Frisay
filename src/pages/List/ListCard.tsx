import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {addNewCardTC, CardsType} from "./cardsReducer";
import {Cards} from "./Cards";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import {CardsPackType, PacksType} from "./cardsPackReducer";

export const ListCard = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardsType[]>(state => state.cards.cards)
    const id = useSelector<AppRootStateType, string>(state => state.cards.id)
    const packs = useSelector<AppRootStateType, CardsPackType[]>(state => state.packs.cardPacks)

    console.log("packs=",packs)
    console.log("cards=",cards)
    console.log(id)
    const addCard = () => {
        dispatch(addNewCardTC(1, 7, id))
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
                              answer={t.answer}
                              created={t.created} grade={t.grade}
                              question={t.question} cardsPack_id={t.cardsPack_id}
                              rating={t.rating} user_id={t.user_id}
                />
            })}
                </tbody>
            </table>

        </div>
    )
}