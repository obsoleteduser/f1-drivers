import React, { useContext, useRef } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { ClockLoader } from 'react-spinners'
import { Pagination } from '../components/Pagination'
import { GlobalContext } from '../GlobalContext'
import './main.css'

export const Main = () => {
    let { data,
        loading,
        currentPage,
        setCurrentPage,
        postsPerPage,
        totalPosts,
        setFavorites,
        favorites
    } = useContext(GlobalContext)



    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)


    const notify = () => toast.success('Item has been added')

    const addToFavorites = (event) => {

        const element = currentPosts.filter(item => item.id === +(event.target.id))



        setFavorites(prev => [...prev, ...element])
        console.log(favorites)
        console.log(event.target.id)
        notify()
    }

    if (loading) {
        return (
            <div className="loader">
                <ClockLoader
                    color="black"
                    size={150}
                />
            </div>
        )
    }

    const paginate = number => setCurrentPage(number)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Add</td>
                    </tr>
                </thead>

                {
                    currentPosts.map(item => (

                        <tr key={item.id}>
                            <td  >{item.id}</td>
                            <td>{item.title}</td>
                            <td><button id={item.id} onClick={addToFavorites} className="btn btn-primary">Add</button></td>

                        </tr>

                    ))
                }

            </table>
            <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}></Pagination>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
}
