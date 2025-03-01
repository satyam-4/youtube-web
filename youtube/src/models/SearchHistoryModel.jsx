import React from "react"
import { History } from "lucide-react"
import { useSelector } from "react-redux"

const SearchHistoryModel = () => {
    const userData = useSelector((state) => state.user.data)
    console.log(userData.data.searchHistory)
    const handleClick = () => {
        alert("clicked")
    }

    return (
        <>
            {
                userData.data.searchHistory.length > 0 ? (
                    <div className="fixed py-4 w-[40rem] rounded-lg bg-gray-800 text-white z-10">
                        <ul>
                            {
                                userData.data.searchHistory.slice().reverse().map((searchQuery, index) => {
                                    return <li 
                                    key={index}
                                    className="flex justify-between items-center p-2 hover:bg-[#8080805f] cursor-default">
                                        <div className="flex items-center gap-4 font-semibold text-[1.1rem]">
                                            <History/>
                                            <p>
                                                { searchQuery }
                                            </p>
                                        </div>
                                        <div 
                                        onClick={() => handleClick()}
                                        className="text-blue-300 cursor-pointer hover:underline">
                                            Remove
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                ): (
                    ""
                )
            }

        </>
    )
}

export default SearchHistoryModel