import {
    HomeIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    MenuIcon,
    BadgeCheckIcon,
} from '@heroicons/react/outline'
import { Router, useRouter } from 'next/router'
import { useState } from 'react'
import HeaderItem from './HeaderItem'

const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()

    return (
        <div className=" overflow-x-0 flex pt-5 bg-black flex-grow items-center min-w-full my-auto justify-between max-w-2xl h-[100px] w-full">

            <div className='flex'>

                <HeaderItem title='MENU' Icon={MenuIcon} onClick={() => router.push('/')} />
                <HeaderItem title='HOME' Icon={HomeIcon} onClick={() => router.push('/')} />
            </div>
            <div className='items-center justify-center mb-5 ml-10'>

                <h1>LOGO</h1>
            </div>

            <div className='flex'>
                <HeaderItem title='SEARCH' Icon={SearchIcon} />

                <HeaderItem title='ACCOUNT' Icon={UserIcon} onClick={() => setShowModal(true)} />
            </div>

        </div>
    )
}

export default Header