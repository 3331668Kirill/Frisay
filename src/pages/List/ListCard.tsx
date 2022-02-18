import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {CardsType} from "./cardsReducer";
import {Cards} from "./Cards";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";

export const ListCard = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardsType[]>(state => state.cards.cards)



    return (
        <div>

            <table>
                <tbody>
                <tr>
                    <th>question</th>
                    <th>answer</th>
                    <th>updated</th>
                    <th>rating</th>
                    <th><SuperButton onClick={()=>{}}> ADD </SuperButton></th>
                </tr>
            {cards && cards.map(t=>{
                return <Cards key={t._id} id={t._id} updated={t.updated}
                              answer={t.answer}
                              created={t.created} grade={t.grade}
                              question={t.question}
                              rating={t.rating} user_id={t.user_id}
                />
            })}
                </tbody>
            </table>

        </div>
    )
}