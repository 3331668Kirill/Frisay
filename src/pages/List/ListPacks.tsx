import React, {ChangeEvent, useCallback, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {
    PacksType,
    getCardsPackTC,
    addNewPackTC,
    deletePackTC,
    updatePackTC,
    setSearchValueAC, setPacksAC
} from "./cardsPackReducer";
import {AppRootStateType} from "../../redux/store";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import SuperCheckbox from "../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import {Packs} from "./Packs";
import Pagination from "../../components/Pagination/Pagination";
import {getCardsTC} from "./cardsReducer";
import SuperInputText from "../../components/SuperComponents/SuperInputText/SuperInputText";
import { debounce } from 'lodash';


export const ListPacks = () => {
    const dispatch = useDispatch()
    const cardPacks = useSelector<AppRootStateType, PacksType>(state => state.packs)
    const userId = useSelector<AppRootStateType, string>(state => state.login._id)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const searchedValue = useSelector<AppRootStateType, string>(state => state.packs.searchValue)
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')

    useEffect(() => {
        dispatch(getCardsPackTC(''))
    }, [currentPage, pageCount, searchedValue])

    const showMyPacks = () => {
        if (isChecked){
            dispatch(getCardsPackTC(''))
            setIsChecked(!isChecked)
        }else {
            setIsChecked(!isChecked)
            dispatch(getCardsPackTC(userId))
        }
    }
    const addPack = () => {
        dispatch(addNewPackTC())
    }
    const deletePack = (id: string) => {
        dispatch(deletePackTC(id))
    }

    const updatePack = (id: string) => {
        dispatch(updatePackTC(id,userId))
    }
    const showCards = (id: string) => {
        dispatch(getCardsTC(1, 7, id))
    }
    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)

    }
    const debounceDispatch = useCallback(
        debounce(value => {
            dispatch(setSearchValueAC(value))
        }, 1400),
        [],
    );

    useEffect(() => {
        debounceDispatch(searchValue);
    }, [searchValue]);

    return (
        <div>
            List
            <div>
                <SuperInputText onChange={onChangeSearchValue}/>
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
                    { cardPacks.cardPacks && cardPacks.cardPacks.map((t) => {
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
                            currentPage={currentPage}/>
            </div>
        </div>
    )
}