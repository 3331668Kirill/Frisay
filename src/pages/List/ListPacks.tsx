import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {PacksType, getCardsPackTC, addNewPackTC, deletePackTC, updatePackTC} from "./cardsPackReducer";
import {AppRootStateType} from "../../redux/store";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import SuperCheckbox from "../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import {Packs} from "./Packs";
import Pagination from "../../components/Pagination/Pagination";
import {getCardsTC} from "./cardsReducer";

export const ListPacks = () => {
    const dispatch = useDispatch()
    const cardPacks = useSelector<AppRootStateType, PacksType>(state => state.packs)
    const userId = useSelector<AppRootStateType, string>(state => state.login._id)
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)

    useEffect(() => {
        dispatch(getCardsPackTC(currentPage, pageCount))
    }, [currentPage, pageCount])

    const showMyPacks = () => {
        setIsChecked(!isChecked)
    }
    const addPack = () => {
        dispatch(addNewPackTC(currentPage, pageCount))
        console.log('new pack')
    }
    const deletePack = (id: string) => {
        dispatch(deletePackTC(id, currentPage, pageCount))
    }

    const updatePack = (id: string) => {
        dispatch(updatePackTC(id, currentPage, pageCount))
    }
    const showCards = (id: string) =>{
        dispatch(getCardsTC(1,7,id))
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
                        <th><SuperButton onClick={addPack}> ADD </SuperButton></th>
                    </tr>
                    {cardPacks && isChecked
                        ? cardPacks.cardPacks.filter((t) => t.user_id === userId).map((t) => {
                                return (
                                    <Packs key={t._id} id={t._id} name={t.name} deletePack={deletePack}
                                           updated={t.updated} path={t.path} updatePack={updatePack}
                                           cardsCount={t.cardsCount} showCards={showCards}/>
                                )
                            }
                        )
                        : cardPacks.cardPacks && cardPacks.cardPacks.map((t) => {
                            return (
                                <Packs key={t._id} id={t._id} name={t.name} deletePack={deletePack}
                                       updated={t.updated} path={t.path} updatePack={updatePack}
                                       cardsCount={t.cardsCount} showCards={showCards}/>
                            )
                        }
                    )
                    }
                    </tbody>
                </table>
                <Pagination pageCount={pageCount}
                            cardPacksTotalCount={cardPacks.cardPacksTotalCount}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            setPageCount={setPageCount}/>
            </div>
        </div>
    )
}