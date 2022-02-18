import React from "react";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import {NavLink} from "react-router-dom";


type PacksPropsType = {
    id: string
    name: string | undefined
    cardsCount: number
    updated: string
    path: string
    deletePack: (id: string) => void
    updatePack: (id: string) => void
    showCards: (id: string) => void
}


export const Packs = ({id, name, cardsCount, updated, path, deletePack, updatePack, showCards}: PacksPropsType) => {

    return (
        <>
            <tr key={id}>
                <td>{name}</td>
                <td>{cardsCount}</td>
                <td>{updated}</td>
                <td>{path}</td>
                <td>
                    <SuperButton onClick={() => deletePack(id)}> DEL</SuperButton>
                    <SuperButton onClick={() => updatePack(id)}> UPDATE</SuperButton>
                    <NavLink to={'/list-cards'}><div onClick={()=>showCards(id)}>Cards</div>  </NavLink>
                </td>
            </tr>
        </>
    )
}