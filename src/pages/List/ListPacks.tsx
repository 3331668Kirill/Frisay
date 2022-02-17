import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {PacksType, getCardsPackTC, addNewPackTC, deletePackTC, updatePackTC} from "./cardsReducer";
import {AppRootStateType} from "../../redux/store";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import SuperCheckbox from "../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import {Packs} from "./Packs";

export const ListPacks = () => {
    const dispatch = useDispatch()
    const cardPacks = useSelector<AppRootStateType, PacksType | undefined>(state => state.cards)
    const userId = useSelector<AppRootStateType, string>(state => state.login._id)
    const [isChecked, setIsChecked] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getCardsPackTC())
    }, [])

    const showMyPacks = () =>{
            setIsChecked(!isChecked)
    }
    const addPack = () => {
        dispatch(addNewPackTC())
        console.log('new pack')
    }
    const deletePack = (id:string) => {
        dispatch(deletePackTC(id))
    }

    const updatePack = (id:string) => {
        dispatch(updatePackTC(id))
    }
    console.log(userId)
    return (
        <div>
            List
            <div>
                <SuperCheckbox onChange={showMyPacks}>
                    my packs
                </SuperCheckbox>
                <table>
                    <tbody>
                    <tr>
                        <th>name</th>
                        <th>cards count</th>
                        <th>updated</th>
                        <th>url</th>
                        <th> <SuperButton onClick={addPack}> ADD </SuperButton></th>
                    </tr>
                    {cardPacks?.length && isChecked
                        ? cardPacks.filter((t)=>t.user_id===userId).map((t) => {
                                return (
                                    <Packs  id={t._id} name={t.name} deletePack={deletePack}
                                            updated={t.updated} path={t.path} updatePack={updatePack}
                                            cardsCount={t.cardsCount}/>
                                )
                            }
                        )
                        : cardPacks?.length && cardPacks.map((t) => {
                            return (
                                <Packs  id={t._id} name={t.name} deletePack={deletePack}
                                        updated={t.updated} path={t.path} updatePack={updatePack}
                                        cardsCount={t.cardsCount}/>
                            )
                        }
                    )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}