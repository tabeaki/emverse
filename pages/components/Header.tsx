/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import Image from 'next/image'

 function Header() {
     return <header>
            <nav className="max-w-full pb-3 pt-1 bg-black">
                <div className="grid grid-rows-12 grid-flow-col">
                    <div className='justify-front flex'>
                        <div className="bg-[url('/opensea_icon.png')] px-2 pt-8 mx-1 bg-center bg-cover"><a className="px-2 py-4" href=""></a></div>
                        <div className="bg-[url('/twitter_icon.png')] px-2 pt-8 mx-1 bg-center bg-cover"><a className="px-2 py-4" href=""></a></div>                    
                    </div>
                    <div className="justify-center pt-2 flex">
                        <Image className="" src="/headerLogo.png" alt="chara1" width={240} height={30} objectFit="contain"/>
                    </div>
                    <div className="justify-end px-2 flex">
                        <Image className="" src="/hamburger.png" alt="chara1" width={30} height={12} objectFit="contain"/>
                    </div>
                </div>
            </nav>
        </header>
   }

   export default Header;