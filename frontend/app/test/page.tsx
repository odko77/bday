"use client"

import { CategoryApi } from "@/utils/api"
import { useCallback } from "react"

/**
    @param {} props
*/
const Test = (props) => {

    const categories = [
        {
            "name": "Хоол & Ундаа",
            "logo": "utensils",
            "color": "#FF6B6B",
            "order": 1
        },
        {
            "name": "Худалдан авалт",
            "logo": "shopping-bag",
            "color": "#4D96FF",
            "order": 2
        },
        {
            "name": "Хувцас & Гоёл",
            "logo": "tshirt",
            "color": "#9B5DE5",
            "order": 3
        },
        {
            "name": "Гоо сайхан",
            "logo": "sparkles",
            "color": "#F15BB5",
            "order": 4
        },
        {
            "name": "Эрүүл мэнд",
            "logo": "heart",
            "color": "#2EC4B6",
            "order": 5
        },
        {
            "name": "Цахилгаан бараа",
            "logo": "smartphone",
            "color": "#00BBF9",
            "order": 6
        },
        {
            "name": "Гэр ахуй",
            "logo": "home",
            "color": "#F4A261",
            "order": 7
        },
        {
            "name": "Хүүхэд",
            "logo": "baby",
            "color": "#FFD166",
            "order": 8
        },
        {
            "name": "Боловсрол",
            "logo": "book-open",
            "color": "#118AB2",
            "order": 9
        },
        {
            "name": "Аялал",
            "logo": "map-pin",
            "color": "#06D6A0",
            "order": 10
        },
        {
            "name": "Зугаа цэнгэл",
            "logo": "film",
            "color": "#EF476F",
            "order": 11
        },
        {
            "name": "Үйлчилгээ",
            "logo": "settings",
            "color": "#8D99AE",
            "order": 12
        },
        {
            "name": "Дижитал үйлчилгээ",
            "logo": "globe",
            "color": "#3A86FF",
            "order": 13
        },
        {
            "name": "Авто",
            "logo": "car",
            "color": "#6A4C93",
            "order": 14
        },
        {
            "name": "Спорт",
            "logo": "activity",
            "color": "#52B788",
            "order": 15
        },
        {
            "name": "Бусад",
            "logo": "more-horizontal",
            "color": "#ADB5BD",
            "order": 99
        }
    ]

    const handleSave = useCallback(
        async () =>
        {
            const rsp = await CategoryApi.list()
            console.log(rsp);
        },
        []
    )


    return (
        <div>
            <h1>NEW COMPONENT WOAW Test</h1>
            <button onClick={handleSave}>
                Save
            </button>
            <pre>
                <code>
                    {JSON.stringify(categories, null, 4)}
                </code>
            </pre>
        </div>
    )
}
export default Test
